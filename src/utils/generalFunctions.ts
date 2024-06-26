export const setTitle = (newTitle: string) => {
    return (document.title = newTitle ? `${import.meta.env.VITE_APP_NAME} - ${newTitle}` : import.meta.env.VITE_APP_NAME);
}