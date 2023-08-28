/*@jsxImportSource @emotion/react */
'use client'

import { css } from "@emotion/react";

const Navbar = () => (
  <div css = {css({
    position : 'fixed',
    width: '100%',
    background : 'red'
  })}>
    h
  </div>
)


export default function Home() {
  return (
    <>
      {/* nav bar*/}
      <div css = {css({
          position : 'fixed',
          width: '100%',
          display : 'flex',
          borderBottom : 'solid'
        })}>
          <div css = {css({
            backgroundImage : `url("logo.png")`,
            width: '115px',
            height : '45px',
            backgroundRepeat : 'no-repeat',
            backgroundSize : 'contain',
          })}>
          </div>
          <div css = {css({
            fontSize : '28px',
            fontStyle : 'bold',
            color : 'white'
          })}>
            REITs 포털
          </div>
      </div>
      
      <div css = {css({
          backgroundImage : `url("main_background.png")`,
          backgroundRepeat : 'no-repeat',
          backgroundSize : 'cover',
          width: '100%',
          height : '100%',
        })}>
          <div css = {css({
            width: '100%',
            height : '50px',
            backgroundColor : 'black'
          })}>

          </div>
          <div css = {css({
            color : 'white'
          })}>
            <div>미래를 위한 또 하나의 투자 REITs</div>
            <div>KRX가 함께 합니다</div>
          </div>

      </div>

      <div css = {css({
          backgroundImage : `url("main2.png")`,
          backgroundRepeat : 'no-repeat',
          backgroundSize : 'cover',
          width: '100%',
          height : '250%',
        })}>

      </div>

      {/* BOOTOM bar*/}
      <div css = {css({
          width: '100%',
          display : 'flex',
          position : 'relative',
          top : '-100px',
          height : '0px',
          
        })}>
          <div css = {css({
            backgroundColor : 'gray',
            width : '100%',
            height : '150px'
          })}>
            <div css = {css({
              backgroundImage : `url("logo.png")`,
              width: '100px',
              height : '100px',
              backgroundRepeat : 'no-repeat',
              backgroundSize : 'contain',
            })}>

            </div>
          </div>
      </div>

    </>

    

  )
}
