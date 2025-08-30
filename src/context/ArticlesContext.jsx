import { createContext, useContext, useState, useEffect } from "react";
import articlesList from '../assets/articles.json';

const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {

	const [articles, setArticles] = useState(null);
    useEffect(() => {
        setArticles(articlesList);
    }, [])

	return (
		<ArticlesContext.Provider value={{articles}}>
			{children}
		</ArticlesContext.Provider>
	);
}

export const useArticles = () => {
	const context = useContext(ArticlesContext);
	if (!context) {
		throw new Error("useArticles must be used within an ArticlesProvider");
	}
	return context;
};