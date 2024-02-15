import Footer from "./components/Footer";
import Header from "./components/Header";
import NewsBoard from "./components/NewsBoard";
import { CategoryProvider } from "./provider";
import SearchProvider from "./provider/SearchProvider";

export default function App() {
    return (
        <CategoryProvider>
            <SearchProvider>
                <Header />
                <NewsBoard />
                <Footer />
            </SearchProvider>
        </CategoryProvider>
    );
}
