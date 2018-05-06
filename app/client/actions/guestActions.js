function submitMessage(data) {
    return dispatch => {
        return fetch('/messenger/message/send/', {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'cors'
        })
            .catch((e) => console.log(e));
    }
}