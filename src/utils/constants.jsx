export const FRAME_BACKGROUND_ITEMS = {
  COLOR: "COLOR",
  TRANSPARENT: "TRANSPARENT",
  BACKGROUND: "BACKGROUND",
};
export const FRAME_TYPE = {
  MAC_FRAME: {
    label: "Mac Browser",
    ratio: "2560 x 200",
    img: "url",
    height: "55%",
    width: "73%",
    CSSID: {
      mac_frame_window: {
        borderRadius: [12, 12, 12, 12],
      },
      mac_frame_winhead: {
        borderRadius: [12, 12, 0, 0],
      },
      mac_frame_button_close: {
        width: [12],
        marginLeft: [6],
        borderWidth: [0.5],
      },
      mac_frame_button_min: {
        width: [12],
        marginLeft: [6],
        borderWidth: [0.5],
      },
      mac_frame_button_max: {
        width: [12],
        marginLeft: [6],
        borderWidth: [0.5],
      },
      mac_frame_dropShadow: {
        borderRadius: [0, 0, 12, 12],
        boxShadow: [9, 2, 25],
      },
      mac_frame_winbody: {
        borderRadius: [0, 0, 12, 12],
      },
      transparent_container: {
        transform: [12, 12],
      },
      image_container: {},
    },
  },
  APPLE_IPHONE_14: {
    label: "Apple Iphone 14",
    ratio: "2560 x 200",
    img: "url",
    height: "54%",
    width: "30%",
    CSSID: {
      iphone14_dropShadow: {
        boxShadow: [9, 2, 25],
      },
      transparent_container: {
        transform: [12, 12],
      },
      image_container: {},
    },
  },
  APPLE_MACBOOK_AIR: {
    label: "Apple MacBook Air",
    ratio: "2560 x 200",
    img: "url",
    height: "550px",
    width: "550px",
  },
  APPLE_IMAC: {
    label: "Apple imac",
    ratio: "2560 x 200",
    img: "url",
  },
  APPLE_IPHONE_15: {
    label: "Apple Iphone 15",
    ratio: "2560 x 200",
    img: "url",
  },
};
