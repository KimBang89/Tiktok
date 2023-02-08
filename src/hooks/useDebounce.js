import { useEffect, useState } from 'react';
/*khi mount callback gọi trước và trả về debounceValue,
 vì người dùng nhập liên tục nên nó sẽ gọi tiếp thì sau lần mount thì cleanFunc được gọi trước cBack, 
 nó sẽ clearTimeout và set lại setTimeout
 -Cứ liên tục như thế khi nào setTimeout được chạy <=> người dùng ngưng nhập,
  => setDebounceValue chạy thì nó mới trả về value từ đó mới có giá trị để request*/
function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    //
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounceValue;
}

export default useDebounce;
