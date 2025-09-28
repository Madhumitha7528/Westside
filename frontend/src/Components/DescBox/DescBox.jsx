import React from "react"
import './DescBox.css'

const DescBox = () => {
    return(
        <div className="descbox">
            <div className="descbox-nav">
                <div className="descbox-nav-box">Description</div>
                <div className="descbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descbox-desc">
                <p>An e-commerce website is an online platform, where businesses and individuals buy and sell physical goods, digital products, and services over the internet, replacing the need for a traditional physical store. These virtual storefronts allow customers to browse, place orders, make payments, and receive customer service online, facilitating transactions and interactions in the digital space. </p>
                <p>An e-commerce website displays products with high-quality images and videos, detailed descriptions, customer reviews, clear pricing, and calls-to-action to encourage purchases.</p>
            </div>
        </div>
    )
}

export default DescBox