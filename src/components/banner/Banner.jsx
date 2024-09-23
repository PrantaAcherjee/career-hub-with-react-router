import banner from "../../assets/images/user.png"
const Banner=()=>{
    return(
         
        <div className="flex  flex-col lg:flex-row">
  <div className="flex-grow place-items-center m-7 p-7">
    <h2 className="text-6xl font-extrabold p-4">One Step <br />Closer To Your <br /> Dream Job</h2>
    <p className="text-1xl p-4">Explore thousands of job opportunities with all the information you need. 
    Its your future. Come find it. Manage all your job application from start to finish.</p>
    <div className="p-4">
    <button className="btn btn-outline btn-accent">Get Started</button>

    </div>
  </div>
  
  <div className="flex-grow place-items-center">
    <img src={banner} alt="hero" />
  </div>
</div>
    )
}
export default Banner;
