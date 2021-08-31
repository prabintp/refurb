import React,{ useState, useEffect } from 'react';
import Product from '../components/Product/Product';
import SearchAndFilter from '../components/SearchFilter/SearchFilter';
import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Products({data,mainData,header}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["title", "price"]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [ postNum, setPostNum] = useState(10); 

    useEffect(() => {
            setIsLoaded(true);
                setItems(data);
    }, []);

    function search(items) {
        return items.filter((item) => {
            if (item.category == filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }
    function handleClick() {
        setPostNum(prevPostNum => prevPostNum + 10) 
      }
   if (!isLoaded) {
        return <>Loading...</>;
    } else {
        return (
            <Layout pageTitle="ShopSite">
                <Header  data={mainData} />
                <div className="my-8">
                    <SearchAndFilter value={q} search={(e) => setQ(e.target.value)} filter={(e) => {setFilterParam(e.target.value)}} />
                    <Product postNum={postNum} search={search(items)} />
                        <div style={{textAlign:'center'}}>
                            {(items.length -postNum) < 1 || filterParam != "All" ? null : <button className="button" onClick={handleClick}>Load More</button>}
                        </div>
                </div>
                {header.map( data => (
                    (data.__component == "select.footer") ? 
                        <Footer data={data} /> 
                    : 
                    null
                 ))}
            </Layout>
        
        );
    }
}
