export default function handelCorretion(bloodsugar, userCorrectionFactorToDisplay) {
    
    let chekedCorrection;
    if (bloodsugar < 100) { chekedCorrection  = (0);}
    else { chekedCorrection =  (userCorrectionFactorToDisplay[0].props.value); }
    
     return chekedCorrection;
}
