export function useTitleCase(text)
{
    if(!text)
    {
        return '';
    }
    else{
        return text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
      
    }

}

export function useSort(data,reverse=false)
{
    let reverseList=[...data];

    let sortedList =[...data];
    for(let i =0;i<sortedList.length;i++)
    {
        for(let j = 0;j<sortedList.length;j++)
        {
           
            if(sortedList[i]<sortedList[j])
            {
                let temp =sortedList[i];
                sortedList[i]=sortedList[j];
                sortedList[j]=temp;
            }


        }
    }

    if(reverse)
    {
        let left=0;
        let right=reverseList.length-1;
        while(left<right)
        {
            let temp=reverseList[left];
            reverseList[left]=reverseList[right];
            reverseList[right]=temp;
            left++;
            right--;
        }

        
    
    }
    if(reverse)
        return reverseList;
    else
    return sortedList;

   

}


