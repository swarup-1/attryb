import { useDispatch, useSelector } from 'react-redux';
import styles from '../Styles/addcar.module.css';
import { useState } from 'react';
import { updateFun } from '../Redux/DealerInventory/dealer_inventory.action';
const Popup = ({car,setUpdate}) => {
  const [carDetails, setCarDetails] = useState(car);
  console.log('carDetails:', carDetails)
  const dispatch = useDispatch();
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarDetails((prevDetails) => ({
        ...prevDetails,
      [name]: value
    }));
};

  const handleDescriptionChange = (index, event) => {
    const { value } = event.target;
    setCarDetails((prevDetails) => {
      const updatedDescription = [...prevDetails.description];
      updatedDescription[index] = value;
      return {
        ...prevDetails,
        description: updatedDescription
      };
    });
  };

  const handleAddDescription = () => {
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      description: [...prevDetails.description, '']
    }));
  };
  const updateFunction = (event) => {
    event.preventDefault();
    dispatch(updateFun({id:car._id,carDetails}));
    setUpdate(false)
  };

  return (
    <div className={styles.popup}>
      <form onSubmit={updateFunction} className={styles.box}>
          <img src={carDetails?.image} alt="Car" className={styles.carImage} />
          <input name="title" type="text" value={carDetails?.title} onChange={handleInputChange} placeholder="Title" className={styles.input} required/>
          <input name="kmsOnOdometer" type="number" value={carDetails?.kmsOnOdometer} onChange={handleInputChange} placeholder="Kilometers on Odometer" className={styles.input} required   />
          <input name="accidentsReported" type="number" value={carDetails?.accidentsReported} onChange={handleInputChange} placeholder="Accidents Reported" className={styles.input}   />
          <input name="previousBuyers" type="number" value={carDetails?.previousBuyers} onChange={handleInputChange} placeholder="Previous Buyers" className={styles.input}   />
          <button type="submit" className={styles.button}>ADD</button>
      </form>
      <div className={styles.box}>
          <input name="currentPrice" type="text" value={carDetails?.currentPrice} onChange={handleInputChange} placeholder="Current Price" className={styles.input} required   />
          <input name="registrationPlace" type="text" value={carDetails?.registrationPlace} onChange={handleInputChange} placeholder="Registration Place" className={styles.input} required   />
          <div className={styles.checkbox_label}>
            <input name="majorScratches" type="checkbox" checked={carDetails?.majorScratches} onChange={() => setCarDetails((prevDetails) => ({ ...prevDetails, majorScratches: !prevDetails.majorScratches })) } className={styles.checkbox_input} />
            Major Scratches
          </div>
          <div className={styles.checkbox_label}>
            <input name="originalPaint" type="checkbox" checked={carDetails?.originalPaint} onChange={() => setCarDetails((prevDetails) => ({ ...prevDetails, originalPaint: !prevDetails.originalPaint })) } className={styles.checkbox_input} />
            Original Paint
          </div>
          {carDetails?.description?.map((desc, index) => (
          <input key={index} name={`description${index}`} type="text" value={desc} onChange={(event) => handleDescriptionChange(index, event)} placeholder="Description" className={styles.description_input} required/>
          ))}
      </div>
    </div>
  )
} 

export default Popup