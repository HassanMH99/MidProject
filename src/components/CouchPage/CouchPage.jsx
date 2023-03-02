import './CouchPage.css'
import React from 'react'
export function CouchPage(){
    const handleAddProgramClick = () => {
        window.location.href = '/add-program';
      };
    
      const handleDeleteProgramClick = () => {
        window.location.href = '/delete-program';
      };
    
      const handleEditProgramClick = () => {
        window.location.href = '/edit-program';
      };
    
      const handleShowProgramClick = () => {
        window.location.href = '/show-program';
      };
return <div className='CouchPage'>
    <nav className='CouchPage-nav'>
    <h1>Welcome to Couch Page</h1>
    </nav>
    <div className='CouchPage-div-buttons'>
    <button className='CouchPage-button' onClick={handleAddProgramClick}>Add Program</button>
        <button className='CouchPage-button' onClick={handleDeleteProgramClick}>Delete Program</button>
        <button className='CouchPage-button' onClick={handleEditProgramClick}>Edit Program</button>
        <button className='CouchPage-button' onClick={handleShowProgramClick}>Show Program</button>
      </div>
</div>
}