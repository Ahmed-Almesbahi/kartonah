/** @format */

import {OrderStatus, PaymentTypes} from './constants';

// import { PixelRatio } from "react-native";
// import { AllHtmlEntities } from "html-entities";
// import truncate from "lodash/truncate";
// import URI from "urijs";
import currencyFormatter from 'currency-formatter';
import KartonahApi from '../api';
import {getProductImage} from './helper';
import _has from 'lodash/has';
// import {store} from '../../src/store/store';
// import { Config, Constants, Images, Languages } from "@common";

export default class Tools {
    /**
     * refresh the tab bar & read later page
     */
    // static getImage(data, imageSize) {
    //   if (typeof data === "undefined" || data == null) {
    //     return Constants.PlaceHolder;
    //   }
    //   if (typeof imageSize === "undefined") {
    //     imageSize = "medium";
    //   }

    //   const getImageSize = (mediaDetail) => {
    //     let imageURL = "";
    //     if (typeof mediaDetail.sizes !== "undefined") {
    //       if (typeof mediaDetail.sizes[imageSize] !== "undefined") {
    //         imageURL = mediaDetail.sizes[imageSize].source_url;
    //       }

    //       if (imageURL == "" && typeof mediaDetail.sizes.medium !== "undefined") {
    //         imageURL = mediaDetail.sizes.medium.source_url;
    //       }

    //       if (imageURL == "" && typeof mediaDetail.sizes.full !== "undefined") {
    //         imageURL = mediaDetail.sizes.full.source_url;
    //       }
    //     }

    //     if (typeof data.better_featured_image != null) {
    //       imageURL = data.better_featured_image.source_url;
    //     }

    //     return imageURL;
    //   };

    //   let imageURL =
    //     typeof data.better_featured_image !== "undefined" &&
    //     data.better_featured_image != null
    //       ? data.better_featured_image.source_url
    //       : Constants.PlaceHolderURL;

    //   if (
    //     typeof data.better_featured_image !== "undefined" &&
    //     data.better_featured_image !== null
    //   ) {
    //     if (typeof data.better_featured_image.media_details !== "undefined") {
    //       imageURL = getImageSize(data.better_featured_image.media_details);
    //     }
    //   }

    //   if (imageURL == "") {
    //     return Constants.PlaceHolderURL;
    //   }

    //   return imageURL;
    // }

    // static getProductImage = (uri, containerWidth) => {
    //   // Enhance number if you want to fetch a better quality image (may affect performance
    //   const DPI_NUMBER = 0.5; // change this to 1 for high quality image

    //   if (!Config.ProductSize.enable) {
    //     return uri;
    //   }

    //   if (typeof uri !== "string") {
    //     return Images.PlaceHolderURL;
    //   }

    //   // parse uri into parts
    //   const index = uri.lastIndexOf(".");
    //   let editedURI = uri.slice(0, index);
    //   const defaultType = uri.slice(index);

    //   const pixelWidth = PixelRatio.getPixelSizeForLayoutSize(containerWidth);

    //   switch (true) {
    //     case pixelWidth * DPI_NUMBER < 300:
    //       editedURI = `${editedURI}-small${defaultType}`;
    //       break;
    //     case pixelWidth * DPI_NUMBER < 600:
    //       editedURI = `${editedURI}-medium${defaultType}`;
    //       break;
    //     case pixelWidth * DPI_NUMBER < 1400:
    //       editedURI = `${editedURI}-large${defaultType}`;
    //       break;
    //     default:
    //       editedURI += defaultType;
    //   }
    //   return editedURI;
    // };

    // /**
    //  * get image depend on variation and product
    //  */
    // static getImageVariation(product, variation) {
    //   if (
    //     !product ||
    //     !product.images ||
    //     (product && product.images && !product.images.length)
    //   ) {
    //     return Images.PlaceHolderURL;
    //   }

    //   const defaultImage = Tools.getProductImage(product.images[0].src, 100);

    //   return variation
    //     ? variation.image.id === 0
    //       ? defaultImage
    //       : Tools.getProductImage(variation.image.src, 100)
    //     : defaultImage;
    // }

    // static getDescription(description, limit) {
    //   if (typeof limit === "undefined") {
    //     limit = 50;
    //   }

    //   if (typeof description === "undefined") {
    //     return "";
    //   }

    //   let desc = description.replace("<p>", "");
    //   desc = truncate(desc, { length: limit, separator: " " });

    //   return AllHtmlEntities.decode(desc);
    // }

    // static getLinkVideo(content) {
    //   const regExp = /^.*((www.youtube.com\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\??v?=?))([^#&\?\/\ ]*).*/;
    //   let embedId = "";
    //   let youtubeUrl = "";

    //   URI.withinString(content, (url) => {
    //     const match = url.match(regExp);
    //     if (match && match[7].length === 11) {
    //       embedId = match[7];
    //       youtubeUrl = `www.youtube.com/embed/${embedId}`;
    //     }
    //   });
    //   return youtubeUrl;
    // }

    // /**
    //  * getName user
    //  * @user
    //  */
    // static getName = (user) => {
    //   if (user != null) {
    //     if (
    //       typeof user.last_name !== "undefined" ||
    //       typeof user.first_name !== "undefined"
    //     ) {
    //       const first = user.first_name != null ? user.first_name : "";
    //       const last = user.last_name != null ? user.last_name : "";
    //       return `${first} ${last}`;
    //     } else if (typeof user.name !== "undefined" && user.name != null) {
    //       return user.name;
    //     }
    //     return Languages.Guest;
    //   }
    //   return Languages.Guest;
    // };

    // /**
    //  * getAvatar
    //  * @user
    //  */
    // static getAvatar = (user) => {
    //   if (user) {
    //     if (user.avatar_url) {
    //       return {
    //         uri: user.avatar_url,
    //       };
    //     } else if (user.picture) {
    //       return {
    //         uri: user.picture.data.url,
    //       };
    //     }
    //     return Images.defaultAvatar;
    //   }

    //   return Images.defaultAvatar;
    // };

    // format currency
    static getCurrecyFormatted = (price: number, currency = 'USD') => {
        let defaultCurrency = {
            currencyCode: 'USD',
            exchangeRate: 1,
        };
        // console.log('currency', store.getState().auth.preferredCurrency);
        // let preferredCurrency = KartonahApi?.store?.getState()?.auth?.preferredCurrency;
        let generalCurrency = _has(KartonahApi?.store?.getState()?.general, 'country.currencies[0].currency')
            ? KartonahApi?.store?.getState()?.general?.country?.currencies[0]?.currency
            : null;

        // if (preferredCurrency) {
        //     currency = preferredCurrency;
        // }
        if (generalCurrency) {
            defaultCurrency = generalCurrency;
        }
        let formatedPrice = '0 $';
        if (price && price > 0) {
            price = price * defaultCurrency?.exchangeRate;

            // formatedPrice = currencyFormatter.format(price, {
            //   ...(currency ? {...DefaultCurrency, ...currency} : DefaultCurrency),
            // });
            formatedPrice = currencyFormatter.format(price, {code: defaultCurrency.currencyCode});
        }

        return formatedPrice;
    };

    /**
     * Calculate price included tax amount
     */

    static getPriceIncluedTaxAmount = (product, variation = null, noFormat = false, currency = null) => {
        if (!product) {
            return null;
        }

        const price = Tools.getRegularPrice({product, currency});
        const productPrice = variation && variation.price !== '' ? variation.price : price;

        if (product.tax_status === 'taxable' && product.tax_class && product.tax_class !== '') {
            const taxAmount = Number(product.tax_class);
            const includedPrice = productPrice * ((100 + taxAmount) / 100);

            return noFormat ? includedPrice : Tools.getCurrecyFormatted(includedPrice, currency);
        }

        return noFormat ? productPrice : Tools.getCurrecyFormatted(productPrice, currency);
    };

    /**
     *
     * @param product
     * @param currency
     * @param isSale
     * @returns {*}
     */
    static getRegularPrice = ({product, currency = null, isSale = false}) => {
        return currency && product['multi-currency-prices'] && product['multi-currency-prices'][currency.code]
            ? product['multi-currency-prices'][currency.code].price
            : product.price !== '' || isSale
            ? product.price
            : product.regular_price;
    };

    /**
     *
     * @param product
     * @param currency
     * @returns {number|*}
     */
    static getMultiCurrenciesPrice = (product, currency) => {
        if (!product || !currency) {
            return 0;
        }

        return product['multi-currency-prices'] && product['multi-currency-prices'][currency.code]
            ? product['multi-currency-prices'][currency.code].price
            : product.price;
    };

    static getCartTotalWeight = (cart) => {
        let total = 0;
        cart.cartItems.map((c) => {
            total = total + c.product.weight * c.quantity;
        });
        return total;
    };

    static getCartSubTotal = (cart) => {
        let amount = 0;
        cart.cartItems.map((c) => {
            if (c.status) {
                amount = amount + c.product.regularPrice * c.quantity;
            }
        });
        return amount;
    };
    static getCartTotalTax = (cart) => {
        let amount = 0;
        cart.vendors.map((vendor) => {
            if (vendor.taxRate > 0) {
                cart.cartItems
                    .filter((ct) => vendor.id == ct.product.vendorId)
                    .map((c) => {
                        if (c.status) {
                            amount = amount + (vendor.taxRate / 100) * (c.product.regularPrice * c.quantity);
                        }
                    });
            }
        });
        return amount;
    };

    static totalQtyByVendor = (vendorId: number, cartItems) => {
        let qty = 0;
        cartItems
            .filter((i) => i.product.vendorId === vendorId)
            .map((c) => {
                if (c.status) {
                    qty = qty + c.quantity;
                }
            });
        return qty;
    };

    static canContinueCart = (cart) => {
        let _continue = true;
        let pass = 0;

        // how many vendor can pass it , we will use pass in another loop
        cart.vendors?.map((vendor) => {
            if (Tools.totalQtyByVendor(vendor.id, cart.cartItems) >= vendor.minBill) {
                pass = pass + 1;
            }
        });
        cart.vendors?.map((vendor) => {
            if (Tools.totalQtyByVendor(vendor.id, cart.cartItems) < vendor.minBill) {
                var allUnchecked = true;
                cart.cartItems
                    .filter((i) => i.product.vendorId === vendor.id)
                    .map((c) => {
                        if (c.status) {
                            allUnchecked = false;
                        }
                    });
                // if one vendor is passed , and another vendor is not but product was unchecked , we should pass them
                if (pass > 0 && allUnchecked) {
                    // he should pass here
                } else {
                    _continue = false;
                }
            }
        });

        return _continue;
    };

    static getDiscount = (price: number, discount: number) => {
        return discount > 0 ? (discount / 100) * price : 0;
    };
    static getCartProduct = (product, item, qty) => {
        return {
            title: product?.title,
            mainPhoto: getProductImage(item.colour.files[0]?.fileName, 400),
            id: product.id, // Product ID
            productId: product.id,
            vendorId: product?.vendor?.id,
            regularPrice: product.regularPrice,
            priceBeforeDiscount: product.regularPrice,
            quantityStep: product.quantityStep,
            weight: product.weight,
            sku: item.sku,
            quantity: qty, // going to be extracted
            brandName: product.vendor.brandName, // going to be extracted
            taxRate: product.vendor.taxRate, // going to be extracted
        };
    };

    static getCartVariation = (product, item) => {
        return {
            id: item.colour.id,
            minBill: product.vendor.minBill,
            discountPrices: [],
        };
    };
}
