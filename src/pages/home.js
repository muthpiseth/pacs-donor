import React, { useState } from 'react';
import BackgroundButton from '../components/buttons/backgroundButton.js';

function Home() {
  const [checked , setChecked] = useState(true)
  const onChange = ()=> {
    setChecked(true)
  };
  return (
    <div className='mt-5'>
       <BackgroundButton tittle="Submit" className="btn-submit mb-5"/>
        <BackgroundButton tittle="Create" width="8rem" height="2.2rem" className="btn-create"/>
        <div class=" form-switch mt-5">
  <input size="lg" class="form-check-input btn-switch" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={onChange}/>
</div>
<p className='text-h3'>Donor</p>
<p className='text-h4'>Donor</p>
<p className='text-h5'>Donor</p>
<p className='text-h6'>Donor</p>
<p className='text-date'>1/1/222</p>
<p className='text'>name</p>
    </div>
  )
}
export default Home