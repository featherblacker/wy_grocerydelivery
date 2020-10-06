
const getCart = () => {
    const url = `api/shoppinglist`;
    fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            useruss: "test",
        })
    }).then(response => response.json())
        .then(res => {
            if (res.status) {
                console.log(res.msg)
            } else {
                localStorage.setItem("cart", JSON.stringify(res.data.shoppingItemList))
            }
        })
}

export {getCart};