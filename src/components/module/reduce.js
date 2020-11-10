let initState = {
    data: [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "https://salt.tikicdn.com/cache/w444/ts/product/45/24/7e/73e0c5ef6df62b0d14901489e251629c.jpg"
        },
        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "https://file.hstatic.net/1000238589/file/meizu_16xs_2019_2ed6b4d5e9f8439494fab79cb39bfd12_grande.jpg"
        },
        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "https://cdn.dienthoaigiakho.vn/630x/https://cdn.dienthoaigiakho.vn/photos/1598862483503-iphone-xs-max-space-gray-dienthoaigiakho.jpg"
        }
    ],

    detail: {},
    cart: [],
}

const product = (state = initState, action) => {
    switch (action.type) {
        case "GET_DETAIL_PRODUCT":
            state.detail = action.payload;
            return { ...state };

        case "ADD_CART":
            const cartNew = {
                maSP: action.payload.maSP,
                tenSP: action.payload.tenSP,
                hinhAnh: action.payload.hinhAnh,
                soLuong: 1,
                donGia: action.payload.giaBan,
            }

            let index = state.cart.findIndex(elm => elm.maSP === action.payload.maSP);
            let newCart = [...state.cart];

            if (index === -1) {
                newCart = [...state.cart, cartNew];
            } else {
                alert("Sản phẩm đã có trong giỏ hàng!");
            }
            state.cart = newCart;
            return { ...state };

        case "DELETE_PRODUCT":
            let cartDel = state.cart.filter(elm => elm.maSP !== action.payload.maSP);
            state.cart = cartDel;
            return { ...state };

        case "DOWN_NUMBER":
            let indexNumber = state.cart.findIndex(elm => elm.maSP === action.payload.maSP);
            let numbera = action.payload.soLuong -= 1;
            if (numbera < 1) {
                numbera = 1;
            }
            state.cart[indexNumber].soLuong = numbera;

            state.cart = [...state.cart];

            return { ...state };

        case "UP_NUMBER":
            let indexNumber2 = state.cart.findIndex(elm => elm.maSP === action.payload.maSP);
            let numbera2 = action.payload.soLuong += 1;

            state.cart[indexNumber2].soLuong = numbera2;

            state.cart = [...state.cart];

            return { ...state };

        default:
            return { ...state };
    }
}

export default product;