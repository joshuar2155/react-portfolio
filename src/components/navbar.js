import React from 'react';
import '../styles/reset.css';
import '../styles/style.css'
function NavTabs({currentPage, handlePageChange}) {
    return (
     
      <header class="label">Joshua Rae
      
      <nav class="top-links">
           <ul>
              <li><a class="links" href="about me">About Me</a></li>
              <li><a class="links" href="work">Work</a></li>
              <li><a class="links" href="contact me">Contact Me</a></li>
              <li><a class="links" href="resume">Resume</a></li>
              </ul>
      </nav>

      </header>   
    )
}