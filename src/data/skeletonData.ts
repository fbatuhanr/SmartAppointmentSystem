// export const skeletonData = [{ id: 1 }, { id: 2 }, { id: 3 }];
export const skeletonData = (length: number = 3) => Array.from({ length }, (_, i) => ({ id: (i + 1).toString() }));