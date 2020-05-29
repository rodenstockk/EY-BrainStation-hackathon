import React from 'react';
import './Feedback.scss';

const Feedback = () => {

    return (
        <div className="feedback">
            <h3>Your feedback helps us for a future proof Data Collection and Analysis</h3>
            <p>We collect and analyze data that generates insights from your feedback to create a new set of rules that will help you dine safer and risk free in the future.</p>
            <div className="feedbackbox"> 
                <img src='' />
                <div className='feedbackP'>
                    <p>Using Natural Language Processing techniques we extract out reviews along the dimensionality of cleanliness based on frequency data in the review corpora.</p>
                    <p>Geographic, attribute, review or other relevant data of restaurants that score at the extremes on this NLP feature can be passed to the app framework and would power the selection and optimization of restaurants that are in line with the philosophy of the app's creators.</p>
                    <p>Currently, the app uses simple frequency data for extracting relevant cleanliness reviews -- in future iterations, more sophisticated techniques including TF-IDF, or word embeddings (taking advantage of semantic features in the language data) would be implemented.</p>
                </div>
            </div>
        </div>
    )

} 

export default Feedback;