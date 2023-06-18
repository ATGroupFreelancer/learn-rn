import {StyleSheet, Text, View} from "react-native";

const ProductList = () => {
    const products = [
        {id: 1, name: 'Documents', total: 32, modiftyDate: '2021-09-01'},
        {id: 2, name: 'Quick Notes', total: 10, modiftyDate: '2021-09-02'},
        {id: 3, name: 'Folder', total: 5, modiftyDate: '2021-09-03'},
        {id: 4, name: 'Templates', total: '1000+', modiftyDate: '2021-09-04'},
        {id: 5, name: 'Product', total: 500, modiftyDate: '2021-09-05'}];

    return (
        <View style={styles.productList}>
            <View style={styles.productTop}>
                <Text style={styles.productTitle}>Previous 7 days</Text>
            </View>
            {products.map((product, index) => {
                return (
                    <View key={index} style={styles.productItem}>
                        <View style={styles.productItemNext}>
                            <Text style={styles.productItemTitle}>{product.name}</Text>
                            <Text style={styles.productButtonNext}>></Text>
                        </View>
                        <View style={styles.productTotal}>
                            <Text style={styles.productContentTotal}>{product.total} {product.name}</Text>
                            <Text style={styles.productModifyDate}>{product.modiftyDate}</Text>
                        </View>
                    </View>
                )
            })}
        </View>
    );
}

export default ProductList;

const styles = StyleSheet.create({
    productList: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    productItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEF1F1',
        marginVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        height: 70,
        borderRadius: 10,
    },
    productTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: 15,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    productItemTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
    },
    productItemNext: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
    },
    productContentTotal: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 12,
        fontWeight: '500',
        color: '#6E7787',
    },
    productModifyDate: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        fontSize: 12,
        fontWeight: '500',
        color: '#6E7787',
    },
    productButtonNext: {
        fontSize: 20,
        fontWeight: '500',
        color: '#6E7787',
    },
    productTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    }
});