import { useEffect } from "react";

export function useKey(Key,action){
    useEffect(
        function () {
            function callback(e){
                console.log(e.code);
                if (e.code.toLowerCase() === Key.toLowerCase()) {
                    action()
                    
                  }

            }
          document.addEventListener('keydown', function (e) {
          
          });
          return function(){
            document.removeEventListener('keydown',callback)
          }
        },
        [action,Key],
      );
}