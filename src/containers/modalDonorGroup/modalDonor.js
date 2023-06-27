import { Button, InputNumber, Modal } from 'antd';
import { useState } from 'react';
import BackgroundButton from '../../components/buttons/backgroundButton';
import '../../styles/modalDonor/modalDonor.css'
const ModalDonor = (props) => {
  const {open} = props
  return (
    <>
      <Modal
        open={open}
        footer={null}
        title="Create Donor Age Group"
      >
        <div className='row gx-0'>
          <div className='col-3 d-flex justify-content-center align-items-center'> 
            Donor Age Group
          </div>
          <div className='col-4'>
          <InputNumber style={{width:'100%'}} min={1} max={10} defaultValue={3} />
          </div>
          <div className='col-1 d-flex justify-content-center align-items-center'>
            <hr style={{width:'20%'}}/>
          </div>
          <div className='col-4 '>
          <InputNumber style={{width:'100%'}} min={1} max={10} defaultValue={3} />
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center mt-4'>
        <BackgroundButton tittle="Submit"/>
        </div>
      </Modal>
    </>
  );
};
export default ModalDonor;