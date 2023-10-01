export type CartaData = {
    data: {
        0: {
            id: number;
            name: string;
            type: string;
            desc:string
            card_images: Array<{
                image_url_cropped: string;
            }>;
        };
    };
};
