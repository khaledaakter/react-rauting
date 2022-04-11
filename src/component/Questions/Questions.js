import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div>
            <div>
                <div className="QuestionsItem">
                    <div className="QuestionsHeader">What is Context API?</div>
                    <div className="QuestionsBody">
                        <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. Context API provides a way for you to make particular data available to all components throughout the component tree no matter how deeply nested that component may be. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux</p>
                        <p>The React Context API was been around as an experimental feature for a while now but finally became safe to use in production last year, solving one major problem React problem — prop drilling.</p>
                    </div>
                </div>
                <div className="QuestionsItem">
                    <div className="QuestionsHeader">What is semantic teg?</div>
                    <div className="QuestionsBody">
                        <p>In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)</p>
                        <p>We know HTML provided us many Semantic teg. Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the "code" tag is immediately recognized by the browser as some type of coding language. Semantic elements have meaningful names which tells about type of content. For example header, footer, table, … etc.</p>
                        <p>A semantic element clearly describes its meaning to both the browser and the developer.</p>


                        <h3>List of some HTML semantic Teg :</h3>
                        <ul className='QuestionsBodyList'>
                            <li>nav</li>
                            <li>article</li>
                            <li>aside</li>
                            <li>summary</li>
                            <li>details</li>
                            <li>figcaption</li>
                            <li>figure</li>
                            <li>footer</li>
                            <li>header</li>
                            <li>main</li>
                            <li>mark</li>
                            <li>footer</li>
                            <li>section</li>
                            <li>summary</li>
                            <li>time</li>
                        </ul>
                    </div>
                </div>
                <div className="QuestionsItem">
                    <div className="QuestionsHeader">Inline vs Inline-Block</div>
                    <div className="QuestionsBody">
                        <p>The display property specifics the display behavior of an element. The display provided us inline and inline block elements. Every HTML element has a default display value, depending on what type of element it is. There are two display values: block and inline.</p>
                        <h3>Inline :</h3>
                        <ul className='QuestionsBodyList'>
                            <li>Displays an element as an inline element. Any height and width properties will have no effect.</li>
                            <li>The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height.</li>
                            <li>An inline element does not start on a new line.</li>
                            <li>An inline element only takes up as much width as necessary.</li>
                        </ul>

                        <h3>Inline Block :</h3>
                        <ul className='QuestionsBodyList'>
                            <li>Displays an element as an inline-level block container. You CAN set height and width values.</li>
                            <li>It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values.</li>
                            <li>An Inline Block element does not start on a new line.</li>
                            <li>An Inline Block element only takes up as much width as necessary. and it's blocked the area.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;