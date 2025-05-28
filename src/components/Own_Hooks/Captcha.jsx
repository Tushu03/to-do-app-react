export function useCaptcha()
{
    let code='';
   
    for(let i=0; i<6; i++)
    {
        code+=Math.round(Math.random() * 10);
    }

    return code;
}