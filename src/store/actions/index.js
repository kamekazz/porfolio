export const acOFview = (prVal) => {
    let payload = prVal
    console.log('good')
    return {

        type: 'ONVIEW',
        payload: payload
    };
}