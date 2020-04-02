import _ from 'lodash'
import { batch } from 'react-redux'

export const onChangeGroupName = name => {
  return {
    name,
    type: 'ON_CHANGE_GROUP_NAME'
  }
}

export const onChangeSearcQuery = searchQuery => {
  return {
    searchQuery,
    type: 'ON_CHANGE_SEARCH_QUERY'
  }
}

export const onSearchPeople = () => {
  return async (dispatch, getState) => {
    try {
      let url = 'https://my-json-server.typicode.com/sustiono/db-testing/people'
      let response = await fetch(url)
      let responseJson = await response.json()
      if (responseJson.error) {
        console.log('Failed to find people! ', responseJson.error)
      } else {
        let { username, email } = getState().group.searchQuery
        let people = []
        if (username.trim() && email.trim()) {
          responseJson.forEach(person => {
            if (person.username.includes(username.trim()) || person.email.includes(email.trim())) {
              people.push(person)
            }
          })
        } else if (username.trim()) {
          responseJson.forEach(person => {
            if (person.username.includes(username.trim())) people.push(person)
          })
        } else if (email.trim()) {
          responseJson.forEach(person => {
            if (person.email.includes(email.trim())) people.push(person)
          })
        }

        let { memberGroup } = getState().group
        if (!!memberGroup.length) {
          people = _.filter(people, person => {
            let member = _.find(memberGroup, { id: person.id })
            if (!member) return person
          })
        }
        if (!!people.length) {
          people = _.orderBy(people, 'name')
        }
        dispatch({ people, type: 'ON_CHANGE_PEOPLE' })
      }
    } catch (e) {
      console.log('Failed to find people! ', e)
    }
  }
}

export const addMemberToGroup = member => {
  return (dispatch, getState) => {
    let { people: currentPeople, memberGroup: currentMemberGroup } = getState().group
    let people = _.filter(currentPeople, person => person.id != member.id)
    let memberGroup = [...currentMemberGroup]
    memberGroup.push(member)
    batch(() => {
      dispatch({ memberGroup, type: 'ON_CHANGE_MEMBER_GROUP' })
      dispatch({ people, type: 'ON_CHANGE_PEOPLE' })
    })
  }
}

export const onDestroyMember = member => {
  return (dispatch, getState) => {
    let {
      people: currentPeople, memberGroup: currentMemberGroup, searchQuery
    } = getState().group
    let { username, email } = searchQuery
    let memberGroup = [...currentMemberGroup]
    memberGroup = _.filter(memberGroup, mmbr => mmbr.id != member.id)
    let people = [...currentPeople]
    let matchUsername = member.username.includes(username.trim())
    let matchEmail = member.email.includes(email.trim())
    if ((matchUsername && !!username.trim()) || (matchEmail && !!email.trim())) {
      people.push(member)
    }
    people = _.orderBy(people, 'name')
    batch(() => {
      dispatch({ memberGroup, type: 'ON_CHANGE_MEMBER_GROUP' })
      dispatch({ people, type: 'ON_CHANGE_PEOPLE' })
    })
  }
}
