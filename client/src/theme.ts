export const tokensDark = {
    primary: {
        0: "#ffffff",
        10: "#fcfbf9",
        50: "#f6f3ee",
        100: "#ebe5da",
        200: "#d8c9b1",
        300: "#c5ad88",
        400: "#b3925e",
        500: "#9f7640",
        600: "#805e33",
        700: "#614626",
        800: "#402c19",
        900: "#20160c",
        1000: "#000000",
    },
    secondary: {
        0: "#ffffff",
        10: "#f9f9f9",
        50: "#f2f2f2",
        100: "#e6e6e6",
        200: "#d9d9d9",
        300: "#edf1f4",
        400: "#bfbfbf",
        500: "#b3b3b3",
        600: "#a6a6a6",
        700: "#999999",
        800: "#8c8c8c",
        900: "#808080",
        1000: "#737373",
    },
};

export const tokensLight: any = {
        primary: {
            0: "#ffffff", // manually adjusted
            10: "#f6f6f6", // manually adjusted
            50: "#f0f0f0", // manually adjusted
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414",
            1000: "#000000", // manually adjusted
            },
        secondary: {
            0: "#f9f9fb",
            10: "#f5f5fa",
            50: "#f1f1f7",
            100: "#fff",
            200: "#e8e8f0",
            300: "#e4e4ec",
            400: "#e0e0e8",
            500: "#dbdbe4",
            600: "#d7d7e0",
            700: "#d3d3dc",
            800: "#ceced8",
            900: "#cacad4",
            1000: "#c6c6d0",
        }
};

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        ...tokensDark.primary,
                        main: tokensDark.primary[500],
                    },
                    secondary: {
                        ...tokensDark.secondary,
                        main: tokensDark.secondary[500],
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        ...tokensLight.primary,
                        main: tokensLight.primary[500],
                    },
                    secondary: {
                        ...tokensLight.secondary,
                        main: tokensLight.secondary[500],
                    },
                }),
        },
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};
