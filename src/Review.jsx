import React, { useState } from 'react';
import reviews from './Data';
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'

function Review() {
    const[index,setIndex]=useState(0)
    const{name,job,image,text}=reviews[index]

    const checkNumber=(newindex)=>{
        if(newindex>reviews.length-1){
            return 0
        }
        if(newindex<0){
            return reviews.length-1
        }
        return newindex
    }


    const nextButton=()=>{
        setIndex((index)=>{
            let newIndex=index+1;
            return checkNumber(newIndex)
        })
    };

    const prevButton=()=>{
        setIndex((index)=>{
            let newIndex=index-1;
            return checkNumber(newIndex);
        })
    }

    const randomButton=()=>{
        let randomNumber=Math.floor(Math.random()*reviews.length)
        if(randomNumber===index){
            randomNumber=index+1
        }
        setIndex(checkNumber(randomNumber))
    }

  return (
    <article className='review'>
        <div className="img-container">
            <img className='person-img' src={image} alt={name}></img>
            <span className="quote-icon">
                <FaQuoteRight/>
            </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className="button-container">
                <button className='prev-btn' onClick={prevButton}>
                    <FaChevronLeft/>
                </button>
                <button className='next-btn' onClick={nextButton}>
                    <FaChevronRight/>
                </button>
                </div>
                <button className='random-btn' onClick={randomButton}>surprise me</button>
            
    </article>
  )
}

export default Review