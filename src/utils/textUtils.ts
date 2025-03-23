export const clipText = (text: string | null | undefined = '', maxLength: number = 12): string => {
    const safeText = text || '';
    return safeText.length > maxLength ? safeText.slice(0, maxLength - 2) + '...' : safeText;
  };
  