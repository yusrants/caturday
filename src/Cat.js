
import ReactCountryFlag from "react-country-flag"

function Cat({cats}) {
  return (
    <div className="catMain">
        {cats.map(cat => {
          return (
            <div className="card">
              <img className="cat-image" src={cat.image ? cat.image.url : ""} />
              <h5>Hi, I'm {cat.name}</h5>
              <p className="desc">
                I'm from 
                <ReactCountryFlag
                countryCode={cat.country_code}
                svg
                style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}
                />
              </p>
              <p className="desc"> My energy level is {cat.energy_level} </p>
              <p className="desc"> I'm {cat.dog_friendly >= 5 ? "VERYY" : "a little"} dog friendly too! </p>
              <p className="desc">
              <span className="heading"> About Me:   </span> 
                {cat.description}</p>
            </div>
          )
        })}
    </div>
  );
}

export default Cat;