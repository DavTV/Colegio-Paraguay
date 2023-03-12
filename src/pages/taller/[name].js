import { useRouter } from "next/router";
const Taller = () => {
    const router = useRouter();
    const { name } = router.query;
  
    return (
        <div className="p-5">
            <h3>Post: {name}</h3>
            <p>En proceso</p>
        </div>
    );
}
 
export default Taller;