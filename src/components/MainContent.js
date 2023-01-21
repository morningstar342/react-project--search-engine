import React from 'react';
import '../static/style.css';

const MainContent = ({pageName, designer}) => {
    return (
        <main>
            {pageName} Page
            <br/>
            Designed by {designer}
        </main>
    );
}

export default MainContent;
