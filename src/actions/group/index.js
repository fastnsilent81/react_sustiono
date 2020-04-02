import _ from 'lodash'

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

const onChangePeople = people => {
  return {
    people,
    type: 'ON_CHANGE_PEOPLE'
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
        if (!!people.length) people = _.orderBy(people, 'name')
        dispatch(onChangePeople(people))
      }
    } catch (e) {

    } finally {

    }
  }
}
