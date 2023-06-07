import { PayloadAction } from "@reduxjs/toolkit";
import { ImageEntity, ImageState } from "./images.entity";

export default {
    'image/load': (
        state: ImageState,
        action: PayloadAction<ImageEntity[]>
    ) => {
        state.listImage = action.payload
    }
};