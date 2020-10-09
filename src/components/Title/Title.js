import React from 'react';

const Title = ({
  title,
  subTitle
}) => {
  return ( 
    <div class="section-heading">
        <h2 class="section-title"> { title && title } </h2>
      <p class="sub-title">  { subTitle && subTitle } </p>

    </div>
   );
}
 
export default Title;