
export const getListProduct = async () => {
    const dataTest = await fetch('https://zen-api.poppetceldran.com/list-product.php')
    return await dataTest.json();
}