import React, { useEffect, useState } from 'react'
import { listPageStyles } from '../assets/dummyStyles'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const ListPage = () => {
    const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const API_BASE = "http://localhost:4000";
  const LIST_PATH = "/api/watches";

  //map all these to UI that is coming from the server
  const mapServerToUI = (item) => {
    let img = item.image ?? item.img ?? "";
    if (typeof img === "string" && img.startsWith("/")) img = `${API_BASE}${img}`;
    return {
      id: item._id,
      name: item.name,
      desc: item.description ?? "",
      price: item.price,
      category: item.category ?? "Brand",
      brand: item.brandName ?? "",
      img,
    };
  };

  useEffect(() => {
    let mounted = true;
    const fetchWatches = async () => {
      setLoading(true);
      try {
        // Short, intentional change: request a very large limit so backend returns all records.
        const resp = await axios.get(`${API_BASE}${LIST_PATH}?limit=10000`);
        const data = resp.data;
        const items = Array.isArray(data)
          ? data
          : Array.isArray(data?.items)
          ? data.items
          : Array.isArray(data?.watches)
          ? data.watches
          : Array.isArray(data?.results)
          ? data.results
          : [];

        if (mounted) {
          setWatches(items.map(mapServerToUI));
        }
      } catch (err) {
        console.error("Failed to fetch watches:", err);
        if (mounted) {
          setWatches([]);
          toast.error("Could not fetch watches from server.");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchWatches();
    return () => {
      mounted = false;
    };
  }, []);

  async function handleDelete(id) {
    const prev = watches.slice();
    setWatches((list) => list.filter((w) => w.id !== id));
    setDeletingId(id);
    try {
      await axios.delete(`${API_BASE}${LIST_PATH}/${id}`);
      toast.success("Watch deleted successfully.");
    } catch (err) {
      console.error("Delete failed:", err);
      toast.error("Failed to delete item. Restoring list.");
      setWatches(prev);
    } finally {
      setDeletingId(null);
    }
  }
  
  // filter
  const getCategoryLabel = (watch) => {
    const cat = String(watch.category ?? "").toLowerCase();
    if (cat === "men") return "Men";
    if (cat === "women") return "Women";
    if (cat === "brand" || watch.brand) return watch.brand || "Brand";
    return watch.category || "";
  };
  return (
    <div className={listPageStyles.root}>
        <ToastContainer/>
        <div className={listPageStyles.container}>
            <header className={listPageStyles.header}>
                <h1 className={listPageStyles.title}>
                    Watch Collection
                </h1>
            </header>
        </div>
    </div>
  )
}

export default ListPage