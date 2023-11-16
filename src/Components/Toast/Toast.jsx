import toast, { Toaster } from 'react-hot-toast';



const notify = (message,type) =>{
    toast[type](message)
 
};
const Toast = () => {

  return (
    <div>
    <Toaster 
         toastOptions={{
            className: '',
            style: {
              border: '1px solid #713200',
              padding: '12px',
              color: '#713200',
            },
          }}
    
    position="top-right"
  reverseOrder={false} />
  </div>
  )
}

export  {Toast , notify}