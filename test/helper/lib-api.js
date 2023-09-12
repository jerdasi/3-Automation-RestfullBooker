export const buildQueryParams = (params) => {
// function ini untuk membentuk params object baru dengan mereturn object dengan field yang berisi nilai
    const resultParams = {};
    for (const key in params) if (params[key]) resultParams[key] = params[key]
    return resultParams;
}