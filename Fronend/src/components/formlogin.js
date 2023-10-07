import '../styling/login.css'

export default function FormLogin(){

    return (
<div className="card">
  <div className="card-header text-center" style={{color: '#23a927 ', fontWeight: 'bold' }}>
    LOGIN
  </div>
    <div className="card-body">
        <div class="input-group flex-nowrap">
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
    </div>
    <div className="text-center">
        <a href="#" className="btn btn-info">
            <span style={{color:"white"}}>LOG IN</span>
        </a>
    </div>
    <br/>
</div>
    )
}
