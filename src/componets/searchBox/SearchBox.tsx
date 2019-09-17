import React, { useState, useEffect } from 'react';
import InputSelect from '../inputSelect/InputSelect';
import Label from '../formLabel/FormLabel';
import { FormBox } from '../formBox/FormBox';
import InputText from '../inputText/InputText';
import { Button } from '../button/Button';
import './SearchBox.css';
const borderColor = '#979797';

interface SearchBoxState {
    brand: string;
    model: string;
    keyword: string;
    brandList: Array<string>;
    modelList: Array<string>;
}

const SearchBox = function () {
    const [url] = useState(process.env.REACT_APP_URL ? process.env.REACT_APP_URL : 'http://localhost:3000/cars');
    const [state, setState] = useState<SearchBoxState>({ brand: '', model: '', keyword: '', brandList: [], modelList: [] });
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const onChangeValue = (key: string, value: string) => {
        setState((prevState: SearchBoxState) => ({ ...prevState, [`${key}`]: value }));
    }
    const onChangeText = (value: string) => setState((prev: any) => ({ ...prev, keyword: value }));
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const json = await res.json();
            setData(json);
            setState((prevState) => {
                const brandList = json.map((x: any) => x.brand).sort();
                return ({ ...prevState, brandList })
            });
            setIsLoading(false);
        }
        fetchData();
    }, [url]);
    useEffect(() => {
        const findModels: any = data ? data.find((x: any) => x.brand === state.brand): [];
        const modelList = (findModels) ? findModels.models.sort() : [];
        setState((prevState) => ({ ...prevState, model: '', modelList }))
    }, [state.brand, data]);
    const onSubmit = (formEvent: any) => {
        const { model, brand, keyword } = state
        formEvent.preventDefault();
        alert(JSON.stringify({ model, brand, keyword }));
    }
    const validForm = !state.brand && !state.model && !state.keyword;
    return (
        <React.Fragment>
            <form onSubmit={(e) => onSubmit(e)}>
                <FormBox borderTop {...borderColor}>
                    <div className="searchBoxTitle">Buy a car</div>
                </FormBox>
                <FormBox borderTop borderBottom {...borderColor}>
                    {isLoading && <strong>Loading...</strong>}
                    <Label text='Brand:' selector="s1">
                        <InputSelect disabled={isLoading} options={state.brandList} name="S1" value={state.brand} selector="S1" onSelectItem={(value) => onChangeValue('brand', value)} />
                    </Label>
                    <Label text='Model:' selector="s2">
                        <InputSelect options={state.modelList} disabled={state.brand === '' || isLoading} name="S2" value={state.model} selector="S2" onSelectItem={(value) => onChangeValue('model', value)} />
                    </Label>
                    <Label text='Keyword:' selector="T">
                        <InputText name="T" value={state.keyword} onChangeValue={(e) => onChangeText(e)} selector="T" />
                    </Label>
                </FormBox>
                <FormBox borderBottom {...borderColor}>
                    <Button selector="B" disabled={validForm}>{'Search Cars'}</Button>
                </FormBox>
            </form>
        </React.Fragment>
    )
}

export default SearchBox;

