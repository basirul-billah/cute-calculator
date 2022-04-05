import React from 'react';

const Blogs = () => {
    return (
        <div>

            {/* explaining context api */}
            <div className='grid grid-cols-1 justify-items-center bg-orange-200 p-4 rounded-lg mx-20 mt-5 text-left'>
                <h1 className='text-xl font-bold'>What is context API?</h1>
                <ul className='list-decimal'>
                    <li>Context API is a React structure that is used to globally share data from component to components instead of prop drilling.</li>
                    <li>This API saves time and is much easier than prop drilling. </li>
                    <li>In order to use Context API React.createContext() function is used.</li>
                    <li>This function returns a consumer and a provider.</li>
                    <li>The Provider component provides state to its children components.</li>
                    <li>The Consumer component is used by the child that needs to use the Context API.</li>
                </ul>
            </div>
            {/* explaining semantic tag */}
            <div className='grid grid-cols-1 justify-items-center bg-orange-200 p-4 rounded-lg mx-20 mt-5 text-left'>
                <h1 className='text-xl font-bold'>What is semantic tag?</h1>
                <ul className='list-decimal'>
                    <li>Semantic tag is used to specify its meaning to browsers and developers</li>
                    <li>Examples of semantic tags are header, footer, nav, form, table, article etc.</li>
                    <li>Semantic tags describes the information it holds within itself.</li>
                    <li>This makes code much more readable and understandable to the developer.</li>
                    <li>Semantic tags assists browser and web crawlers to classify and identify key parts of the web page.</li>
                    <li>They are also beneficial for SEO.</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;