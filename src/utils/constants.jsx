export const FRAME_BACKGROUND_ITEMS = {
  COLOR: "COLOR",
  TRANSPARENT: "TRANSPARENT",
  BACKGROUND: "BACKGROUND",
};
export const FRAME_TYPE = {
  MAC_FRAME: {
    label: "Mac Browser",
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
    },
  },
  APPLE_IPHONE_14: {
    label: "Apple Iphone 14",
    img: "url",
    height: "54%",
    width: "30%",
    CSSID: {
      iphone14_dropShadow: {
        boxShadow: [9, 2, 25],
      },
    },
  },
  APPLE_MACBOOK_AIR: {
    label: "Apple MacBook Air",
    img: "url",
    height: "550px",
    width: "550px",
  },
  APPLE_IMAC: {
    label: "Apple imac",
    img: "url",
  },
  APPLE_IPHONE_15: {
    label: "Apple Iphone 15",
    img: "url",
  },
};
