import { Button, InputNumber, Modal } from 'antd';
const ModalConfigure = (props) => {
    const {showConfigure} = props
  return (
      <Modal
        title="Create Campaign Activness"
        open={showConfigure}
      >
        <div className='row g-0 border'>
          <div className='col-2 d-flex'>
          <InputNumber size='small' style={{width:'100%'}} min={1} max={10} defaultValue={3}/>
          </div>
        -
          <div className='col-2 d-flex'>
          <InputNumber size='small' style={{width:'100%'}} min={1} max={10} defaultValue={3}/>
          </div>
          <div className='col-4'>
                <span>Campaign attended within</span>
          </div>
          <div className='col-2'>
          <InputNumber size='small' style={{width:'100%'}} min={1} max={10} defaultValue={3}/>
          </div>
          <div className='col-2'>
            <span>days</span>
          </div>
        </div>
      </Modal>
  );
};
export default ModalConfigure;