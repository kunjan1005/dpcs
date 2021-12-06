import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core'
import { NavLink,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from '../common/Loading'
import Logout from '@material-ui/icons/ExitToApp'
import _ from 'underscore'
import { useAuth0 ,withAuthenticationRequired } from '@auth0/auth0-react';
const Profile = () => {
  const { isLoading } = useAuth0();
  let [user, setUser] = useState({})
  let navigate=useNavigate()
  let state = useSelector((state) => state.userReducer)
  // console.log(state)
  // if(_.isEmpty(state)){
  //   navigate('/login')
  // }
  const { logout } = useAuth0();
  useEffect(() => {
    setTimeout(() => { setUser(state) }, 900)
  }, [user])
  if (isLoading) {
    return <Loading></Loading>
  }
  if(_.isEmpty(user)){
    return <Loading></Loading>
  }

  return (
    <div className='row main-profile mt-2'>
      <div className='card col-lg-8 col-sm-12 m-auto profile-div '>

        <div className='row '>
          <div className='logout'><NavLink to={() => {
            logout({
              returnTo: window.location.origin,
            })
          }}><Button variant='outlined'><Logout /></Button></NavLink></div>
          <div className='col-lg-4 col-4 m-auto followers order-1'>
            <h4>{user.following ? 0 : 1}</h4>
            <h6>following</h6>
            {/* <button className='profile_btn  btn-primary mt-5'>EDIT PROFILE</button> */}
            <NavLink to={`/profile/edit`}>
              <Button variant="outlined" className='mt-5 profile_btn'
                style={{ backgroundColor: 'palevioletred', color: 'white', border: "none" }} data-id={user.user_id} >
                EDIT PROFILE
              </Button>
            </NavLink>
          </div>
          <div className='col-lg-4 col-4 order-2'>
            <div className='main-profile-pick m-auto'>
              <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgSEhUSFRIYGBgYGBgZEhIYGBgYGBgZGhkZGBkcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhIRGjQhISExNDQxNDQ0NDQ0NDE0NDQ0NDQ0NDE0NDQ0NDQ0NDQxMTQ0NDQ0NDE0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xAA6EAACAQIEAwYEBAUEAwEAAAABAgADEQQSITEFQVEGEyJhcYEykaGxQlLB8CNiktHhFIKy8XKiwtL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgEDBP/EACARAQEAAgMAAwADAAAAAAAAAAABAhESITEDQVETImH/2gAMAwEAAhEDEQA/AOmtEBJWj2mCNpICK0cCSJIJagkVEsSBGuNINaFVhpBgIaQEcRASQEBASxRIiTWA6zl+26/w/cfedUs5ntqv8I+o+8ZeEcLjgcgmPabeL+ATGAj421OkpknSSw4lzpO0xRaCyxS4pKjFjTiIGOCI2YTNMQYRssnaSAjTVeWRYQjLKagizTJSRYRTpiU0RDaVImZjNt2ssAJWzjrGxIyiAFjNyy102Roo4POPWTSZyMbzRR7rGN31WWfYdaY85YbASVxIva03WmbD54pXFOW16e2WitJWitNSYCSAjWk1EB1lqytRLlgRrDSCQ2sNIJaAhHitHElpxJrIiSECazne2a/wW9p0azA7YD+A3pF8I4iqg7oTnlnUJSL0rDeYD4B0+Pwj6n0En48pLW2I0BCT7QUEAXAuOp5xjieg/WdpmnitaUZPOVs95EsY5bNCe7HWQ7sdZPCYVqhshBbe19bdR1leIoOhs0c5vRqkbCK8p1iEcjS/NKXMKocOdxdReO/DKg3U/KTc55tsxoVHtCFxREIThT2udJFeGMZPOfreId8RfeUEzSbhLCDPgyI5S/ZqqEMvasLSLYa0qdCJsyKl30uSqLawS0abKxfYRSiKGvc7R7R4oSYCSEaSAgOsuWVLLkgNVGkEhtXaCQEI8UeAgJIRgJICGpCYna1b0H9JuCZHaVM1Jh1FpOXhHHYCqKaFyLgcr2ueQE5jieKZ2LMdSTe30HpNDH4oECmhuq72/E3M+g1F+evKW4Ds/Uraqth1Og/zIxkndX3eox6rg8jbkAbWA6yggch9531fsupUZj47WJHOY+I7PVATlIIA25+0rlDhXL2B2iB5QnE4Rk1tyvBzrKl2mzRlYqQQSCDcEEgg9QeUJfFs/wAZu3WwF/8AMEijQtKRBZKi19DvLCk1grAcSdPMTo8PxJHHitORyx1YjYzll8cyVLp1WIt+HaPh0FvOYmEx5GjTVRj8Q2nDLG49Ve9r6izLxaiH1a+kzipYzcWAnWD4m01alDSZWKWxnXG7qaGMaKKdmFaPFFA92q0ypsZC02MTQDCZToVNjCUJIRo4gSWWpKllyQFV2gohVTaDCA8QEUQgOJIRARxAecf264wETuUPjYeK24U8vUzf45xVcNSNQ2LbIv5m5D05meTYis9erdySWOsmqjoeyHZ8Vv49UfwwfCu2Yjr5CegrSVVyqAAOQgnCKYSiigWAUQl2k7dJA1cTNraXhuJYwCqN7yKvFzGMohlZLeNGIHmp1X5qR7ictWSxvOyx1Cxzj4rWYdROWx6anpv85uFTnAJEa8UdhOzkSNY3hTNBBD+FYfvD3fPcScrrsk2oLxs06ml2cUiDYzgGVSRI/kxbxrDw6FmFp1NNQqAGc5QpMreknicU3WXn8OWU/wARj8mMuttSvJUWFrc5VgXzJrvI1qLLrynm1q6rrva55j8QOsMfEaeczsSCZ0xnaaGEREUYmd2IxSUUD6VgmJw+YQuNDGC6EGxiE1MTh80y2Ug2MMSWXJKFMuSBJ9oKIU+0GEBCSEiJMCA4iMkBIsJLXB9pa2eo7tqtN1RB5ZS7H3KkfsTk+FKDVCn8TKv9TZf1nV9qqZSpVAB8Zp1L8iL5G+WYzmeBYZ3ro6KSiVKRc3HhzOAunO5kz7X+O84rVxTfw8Kqoi6ZjbM9tNAdhMV8VxBNzTbzsL/LT7Tp+P1XVQtJWYk6hSV082t4R1trbbXWcFx6lXR7Bi9wpzKhVbkG4uSWFjyY3taO1dOg4ZxHEOwSslr88ttRLuO4zutRubxux71GUip4gDoTv8+frMjt5VIcKNv2JPtVvUY1TitWqwUeEEgaDz1Jglam+pa+U/Dfp+7SGDJJ335kmw8zbU+kjUZgSOW2wG0vWvHPe/QxjxNImWkpZh6xRw45H5yuKLNjv+DY8VFve/7105cveQ4tjVUWN5y/AsZ3bjoTr5+Xrpce45zS7QVEIFjytOWPx/20ZX+oVTnY5dbyOOwDKLkR+B1VRgW2mvxLiVJ0yg6z387qPF/HJboBwzCOymwNhNCthHK2I02vNPgtZO7FiL21htd1yG2+k8meONyenHK6cbW4Y41bQdZnYk6WnbcUqKUIXfScbxClaRdTJ0ltnbOMQijEToJRSN48D6TijR4YRgmKw19RvDIxEDDKkGxliw3E4a+ogQFjYwxN9oKIU+0FWBJZYBILLBAeMwiihrk+3mGvTWoNDqhPkSH/APg/Ocn2HucSqi9swYi/IHn11yfSdj2+xATDAG12qLYdctyf35zhuxj5cbStzzj1/hufuBJ16qXx6zUWZGL4ejmzXPlymwxg9UgamRe3SdKsDg0pKSoA9J5t2yrFq9jsBpPRavEApSmEqO73+FLqgBOrsSABp6zzXtPig9W1rFdD63MT2F3q7ZWH3mm2HBQkm9vEDzsNTM/CJ48sNrMVBUcwRNvrJOmY43lUsrHUyF5cc6aKSteRmsSRrfv7QnE1s4U35WPqBr894Kpl7UbBW3B095l9atwgHM8jBag10l4psOsiKZPIzpznGRzmNmVrY7N1DmKk2Fp0Spr8WltuU4ugXQ3AIMuPEal9zOVm63VdSEFzdric/wAZYbAwQ4up1MGqux1Mnj3tWPUUiOYo150akqeYilgQxSR9GCPIiPKYePGjwFaC4ihfWFiK0DIcWEFWa+JoXGkyRoYYmslKwZMQHjMwAJYgAakk6CPOM7Y8UJf/AE2YpTt4jla7m18un4dfQmTbpUm3PdsuM/6mp4D/AAkuqfzHYkSnsfxFcPic1UsKboUJGXQkqykk7Ldddt77CUYoK75qYOUWCA9ALAkdAB9Jm1zcn7xK2x7Wj3APUA8vuNJU6ZjrtMbsTic+DQaXQuh8rMSo/pZZp413CnuwpfkCSB7yL06TtPFtlB01I95w/HsDSKXJUVAdRcXN+s0sXQxeYvUyFDuiPdhrvmZdfpOe4pQsHOSpnJ+N6gGn/jbyPONdr11+sW2RtNwYRia+YX5nQ/fT6QBiS1jbeW1La21EvTjtQ/WQAkmMSmUlGKKKApYjixU9Lg+fSVxQx1uFopURX3uBflY22llPDIp1E57hGLZGsrhb8m+Anz6HzE3WxYfQgo43U/odiPOeXLHKVWxj4VLbC0zMTh0GwvClqG1j95SlRV1abjKzcBMg6QTEuoFhvCsfj1I8Mxna8644mzExxGtHE6DQpbCPB1eKRpj6IjiNHlh48jHECQkpESQgJluJjYvD21E2jB3S8yjDUyxZdicNY3EHUzWJs1pzXbPFIKPdgqXdgDsbDW+v73nRlAdwPlOP7di70U5AO3le1gLev0vJyXj65nF0u6ooSLVKq5z1VCfALW0v+kwq7DZdhNbtPUbvnU3ChnCDogdlUDyFre0xiP8A5+0SfZa6nsZxcUH7tzalUUXPJXBIUnoCDYn0OwnoiCeN0FBVgeQP1H9x/wC03Oz3a56Fqde70RoG3dB5fnUdNxy2AmWbVMtR3+OplltOR4lwxmuXY6XnWV8WuW4NwRec1xbG3uBIrrPHE4mlkJlCt1heJRmJ0067Sg0wNzf0nSeOF9QrKAdJBFkniQ6en2gRZbSMkzXkZUYUUaSWGNngWCSolQOL6qAb2INjqPnGxmCekMy1Qyg+EMDf0HX0mdSDjVGZeuUkfaXOKoy1CxcbAsM2U9LHb2nO43e9qatGodA3hY8r6ex/SVYtbDWQw/FBbLVRXQ7sm49VOo6xcVqqAMjB0Oqm+tuh/f2kzG7Ztk1GlYaTZgYRw+gruFY2E7MCl4lM6t+F4cW8S/OUYjC4dQSCpNtNZm2cmGtoo9SotzaKNN2+iY4jRTQ4kpERxAeTEiJIQJGUmWmUmBFkvM3E4e2omoJF0vAxkbrOX7V0M+IpKNwOXmlW31E7Gth7G42nM8apk43DW82Poiv/APqRk3FwXaxy2IOnJremd2H0YfKZdSmQoPmAfYA/rN3tXRAxAtfIEsbcsl6Z1/2bc5lV2Bpg21zWOvMgf2iXxWgoex+n9vkbQdxJvIiVGPSOy2KFXDoGAYgZTcA6rp+k1MVw6mVuEQf7ROK7HYoqxTkTcTvka4nK+2OkvUcFxnAWPzmA1A3tPQOLYe/LnMMYG7RMtFm3NPRMhTT4vT/P6Tffhju/d01ux9gBzLHkILxbBpRqd2hJyhQxPNjobDlzFvKXLuIs7YhEYiFYPDGo4pr7noBqTHpYUvV7tNQCfkL319jK2nQVUvpzl9BbMAwv+s114LdFP43bwnottD7gX+Um+F/h1EcAVqYzDl8OoI8mAt69LRs0LwXDmdbKiAEEEtY2/wDEAb9PX0BvTA5VIYFRntcao1zbY7+lrbekM7PvmQgaoDppe4YX/X319yccjZfCL3ceG39uug05TIVwvEsJ3dRqd/Eh0YfiXdT7giAg7ib3arL/AKgleaJ5WIzC3loBpMJk1sPSUxCOrEbSXdN0MXdN0MBGq3UxmYncx+7bpG7s9IEYpLuz0MeB9IxRRQHEeMI94EhJCQEkIEjKDLzKDAUZzpHEZtoGRVxjFittvOc7j6pbFpv4KbMbX0zErv1NxNmvT8bG4G05wuzirUp3NzlU9VTwrbqSS1uvhkZVeM+3Pdo6h2OW5tf827HcHUa9JiU8M2QliApsfMDXW3pf6dZr4/A5agDNnqNrlG21/EegA8uUyagZ3yi7Em2psLgEnXkLL9JM/FUE63N9gdh0hmB4eXGm5zH5C+sJpYZXJCg3Gh6jWwB+nzJm/wAEohEZzqQSABubHYebEAW8hK2nTn+CnI9jcEfrqPuJ6Hg6mZZGv2cp1EQNdKqIqB0tfwgCx/MvkYRg+C1EsM6MOuVl+msm43e1TKa0FxqEyjAcOL67DmeQ/fSbC0UzZXYlwASvwjXn5jf5QkjS2gA2A0A9vX7zZjv1ly/AH+nSmuSmN/iY7k7a+Qvt0M81xlFqrvX/AA5ybC5NlzX0/lCMT6ec9VKXI8v0/tt6TmOI4I4Vy6qTTdny2Utq5GekwAJsSt1Ivr7iVekztyuHVaeIqZDamKJZTrqGVNQfMkm8v7MYdWWpUfmcg876n9B7xV+D1HIGHWoVVTTzujoCrNmCHMAbqGsdCLLoTcAdBw7hLUafdWVvH+IaMbqDfoPDvymAyjhg1ZVGyKTbpsq/TN8pk8fsH7xBrUR6Ki34it0NvKx15AmaxpKi1HNSpSOgsSt9Lk/GDfRuRg/DeEd4VqVM9grE5iSSXsdvwgDS1he5NrWJCfZ/BlKQLaE3IGugAsCfa3z84sS2Qh+SI7ttzGgH6DnYH01KpsGtpoqA8rnp+/vMvEKGfLYmmzgZdzkp5i5a/U6a+dz1qRjju0YtW/2C/wD5spYi3+8Qfs/QV8QiNsc1vUIxH2kuNVi9Rqn4C7BbX5AAH+kL8hG7NtbFUSfz2/qBX9YrHSPhER8rL6R6WCR3yqonUnhy1SZVS4B3bFlJtvrI72aYmJ4Oii+QTMehT5KL+86niAzKVA1mTguGonie17n6zaxnrwUHW0U6VWSKOx3UC4hjO7XNYkDpDoLjqQZCDKvnTYw37RX+FWPyEngeLs7gMLA7a85imnlJXoSPlJIcpDDcG/ynCZ3fbtcJrp3iNcXkxBMBUzID5QsTvHFIyky2C4isEBY7CKLYzHSZqcZpn8Q+ssbiCsvg1O2n6zN7GZiKZLsT8PTrp9pgcRxS4dalSwApi6qBoWZciL5i7k/7PKdOEPPU68995xfGkFSrSpn4XqPUIve6orBPUEn/ANjFmlY9hcPgmoU3rVSTUqUnNyQcp1a1+lso9R6XwMPWCVkLADL4G23yut9OoK/OegcRQf6SoCLnunPp4Dr5CcXxThoFNKwJ1azn8oa2Rr9AcvsZjYs4ZQR1ZnF6lkC2vmUW38Oo8zoOXWb3BMALo24XUDOWObq1zp10569LY3CeHgZqddqiMSCpzsEe/vlLfynXWdhw7h6Ii92gUWvoN77k9YkLWxRA+0IA6QWitgeVvvpLqdTr/Nz6S0MHtLdKtKoNLPY+auLEH3APuYf31/p6a/8AUj2pwgegzC90swNzyNj7WvA6L3Wi3JkIPnYow+Vm+cn7b9NCmfF7/cf4keKUldRTYXU6H39Ocng0ub9LXPW2bnuYqvicSmK8NQIZVfxWt4/zAAlb/wAwsAet/PR8aoDpt8S/3mgwAB8h9/8AqZfFD/ES/wCYfYwKeKKO4b+c6+eYhR9oTUSyCmuha1yOQO/0lWNTP3SHYupPot3+uW3vCwLKzkDM3w+VzYekALGOEF+QDv7qLL9dfbrMuhTyBja5I7tTpu13qZR8uXLnrNHE082h1DHXlmVFOlx1MZaQ/FsFIG/xPcm30HzEDzLiNO2ZgfArlVHLxKCSPpKODPlxFI9Kif8AICa/bKnkqBQLKRfyJXwgjroAPac/QqZGWp+Rlb+khv0ge4cDokJdtzr84VxGsERmOwBPylmFUBRbaZnaGqAmX8xA+cn6HOYTiGcEsNSem19oFi6T1blTYaiadTIq6WvBsNWzXC9dRMYwO4rfnP0inVd11tFHE276QqC4MaKW1yXEKdnbz1lAEUU8t9eieOj4FVugHTT5Ga4iinpx8jjl6nM7iYujehiimZeJjlkS018GmVB5m/1/sIopOHraliX0yi9zfn9PLcTj+DVFr1qtQABEVaKG2qqpOYgdSQbdBFFKvpPB2Ov3LU2uc9qd7g3BcKb32sL6bdJTQoLXLqR4Cx0PMfsRRTK2J4SiaQOHqjPSa/ds1mNsvwuOZCgWPl132KXD0VVy5lWwHhdltm2uBo3uD5xRTYUVQuFFzc2AJ2v0MnTOuum//JuntFFKSfiozYeqP5G/4mYOEe1GgfUfNYopN9bG3hRlS/XaRw63f0/7iilMEYlrKTsN/wCk/wCJk8bbxofNSfOKKKQ1eob0R+YqvlqpmrUXN6XuPO2g+v2iimQoTFlaalm1IBtuf3qYDgqbOpdzrY8zvbL+/WKKaxwXbOvmxBHJQFA6asT95ghNL8v+4ooa9q7J47vsJRqE3OTIxta7IShNvVb+8G48AxAOwN/lHiklYeQMbNbLy3vB2vTfQ6HWKKYkd3piiimj/9k=' alt='profile..'></img>
            </div>
            <h3 className='m-auto profile_title ' style={{ textAlign: 'center' }}>{user.name}</h3>
          </div>
          <div className='col-lg-4 col-4 m-auto following order-3'>
            <h4>{user.followers}</h4>
            <h6>followers</h6>
            <Button variant="outlined" className='mt-5 profile_btn'
              style={{ backgroundColor: 'orange', color: 'white', border: "none" }}>BECOME A CHEF</Button>
          </div>
        </div>
        <div className='row profile_links'>
          <div className='col-md-11'>
            <span>dipicious@dipicious</span><br />
            <span>Dipicios official account!</span><br />
            <NavLink to='#' className='links'>https://xyz.com</NavLink>
            <span></span>

          </div>
        </div>

      </div>
      <br />

      <div className='col-lg-8 col-sm-12 m-auto profile_post_container'>
        <hr />
        <div className="row m-auto">
          <div className='col-md-3 col-3'><b>16 </b>ACTIVITIES</div>
          <div className='col-md-3 col-3'><b>18 </b>FAVRIATE</div>
          <div className='col-md-3 col-3'><b>26 </b>REVIEWS</div>
          <div className='col-md-3 col-3'><b>126 </b>POINTS</div>
        </div>
        <div className='row post_container'>

          <div className="col-md-4 col-6 m-auto mt-3" >
            <img className="card-img-top"

              src="https://tse3.mm.bing.net/th?id=OIP.QW_dPaKSU-NMlBMMgFkpQgHaE9&pid=Api&P=0&w=268&h=180" alt="Card image cap" />
          </div>
          <div className="col-md-4 col-6 m-auto mt-3" >
            <img className="card-img-top"

              src="https://tse3.mm.bing.net/th?id=OIP.QW_dPaKSU-NMlBMMgFkpQgHaE9&pid=Api&P=0&w=268&h=180" alt="Card image cap" />
          </div>
          <div className="col-md-4 col-6 m-auto mt-3" >
            <img className="card-img-top"

              src="https://tse3.mm.bing.net/th?id=OIP.QW_dPaKSU-NMlBMMgFkpQgHaE9&pid=Api&P=0&w=268&h=180" alt="Card image cap" />
          </div>
          <div className="col-md-4 col-6 m-auto mt-3" >
            <img className="card-img-top"

              src="https://tse3.mm.bing.net/th?id=OIP.QW_dPaKSU-NMlBMMgFkpQgHaE9&pid=Api&P=0&w=268&h=180" alt="Card image cap" />
          </div>

          <div className="col-md-4 col-6 m-auto mt-3" >
            <img className="card-img-top"

              src="https://tse3.mm.bing.net/th?id=OIP.QW_dPaKSU-NMlBMMgFkpQgHaE9&pid=Api&P=0&w=268&h=180" alt="Card image cap" />
          </div>
          <div className="col-md-4 col-6 m-auto mt-3" >
            <img className="card-img-top"

              src="https://tse3.mm.bing.net/th?id=OIP.QW_dPaKSU-NMlBMMgFkpQgHaE9&pid=Api&P=0&w=268&h=180" alt="Card image cap" />
          </div>


        </div>


      </div>
    </div>
  )
}

// export default withAuthenticationRequired(Profile, {
//   onRedirecting: () => <Loading />,
// });
export default Profile