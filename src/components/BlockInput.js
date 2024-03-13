import { useEffect, useState } from 'react';
import '../styles/BlockInput.css';

function BlockInput() {

  const [placeInput, setPlaceInput] = useState('');
  const [hipInput, setHipInput] = useState('');
  const [feetPositionInput, setFeetPositionInput] = useState('');
  const [feetOrderInput, setFeetOrderInput] = useState('');
  const [feetOpenCloseInput, setFeetOpenCloseInput] = useState('');
  const [stepInput, setStepInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [legFormInput, setLegFormInput] = useState('');
  const [legCardinalInput, setLegCardinalInput] = useState('');
  const [legSideInput, setLegSideInput] = useState('');
  const [directionCardinalInput, setDirectionCardinalInput] = useState('');
  const [directionSideInput, setDirectionSideInput] = useState('');
  const [spinInput, setSpinInput] = useState('');
  const [headInput, setHeadInput] = useState('');
  const [leftArmPositionInput, setLeftArmPositionInput] = useState('');
  const [leftArmSideInput, setLeftArmSideInput] = useState('');
  const [leftArmFormInput, setLeftArmFormInput] = useState('');
  const [rightArmPositionInput, setRightArmPositionInput] = useState('');
  const [rightArmSideInput, setRightArmSideInput] = useState('');
  const [rightArmFormInput, setRightArmFormInput] = useState('');
  const [variantValue, setVariantValue] = useState('');
  const [finalBlock, setFinalBlock] = useState('');

  const [demiChecked, setDemiChecked] = useState(false);
  const [petitChecked, setPetitChecked] = useState(false);
  const [plierChecked, setPlierChecked] = useState(false);
  const [platChecked, setPlatChecked] = useState(false);
  const [aterreChecked, setAterreChecked] = useState(false);
  const [quartierChecked, setQuartierChecked] = useState(false);
  const [grandChecked, setGrandChecked] = useState(false);
  const [etireChecked, setEtireChecked] = useState(false);
  const [releveChecked, setReleveChecked] = useState(false);
  const [enlairChecked, setEnlairChecked] = useState(false);
  const [changementChecked, setChangementChecked] = useState(false);
  const [fermeChecked, setFermeChecked] = useState(false);
  const [entournantChecked, setEntournantChecked] = useState(false);
  const [battusChecked, setBattusChecked] = useState(false);

  const [demiValue, setDemiValue] = useState('');
  const [petitValue, setPetitValue] = useState('');
  const [plierValue, setPlierValue] = useState('');
  const [platValue, setPlatValue] = useState('');
  const [aterreValue, setAterreValue] = useState('');
  const [quartierValue, setQuartierValue] = useState('');
  const [grandValue, setGrandValue] = useState('');
  const [etireValue, setEtireValue] = useState('');
  const [releveValue, setReleveValue] = useState('');
  const [enlairValue, setEnlairValue] = useState('');
  const [changementValue, setChangementValue] = useState('');
  const [fermeValue, setFermeValue] = useState('');
  const [entournantValue, setEntournantValue] = useState('');
  const [battusValue, setBattusValue] = useState('');

  const [currentPhrase, setCurrentPhrase] = useState('');


  const handleInputChange = (event) => {

    if (event.target.id === 'place-input') {
      setPlaceInput(event.target.value);
    }
    if (event.target.id === 'hip-input') {
      setHipInput(event.target.value);
    }
    if (event.target.id === 'feet-position-input') {
      setFeetPositionInput(event.target.value);
    }
    if (event.target.id === 'feet-order-input') {
      setFeetOrderInput(event.target.value);
    }
    if (event.target.id === 'feet-openClose-input') {
      setFeetOpenCloseInput(event.target.value);
    }
    if (event.target.id === 'step-input') {
      setStepInput(event.target.value);
    }
    if (event.target.id === 'number-input') {
      setNumberInput(event.target.value);
    }
    if (event.target.id === 'leg-form-input') {
      setLegFormInput(event.target.value);
    }
    if (event.target.id === 'leg-cardinal-input') {
      setLegCardinalInput(event.target.value);
    }
    if (event.target.id === 'leg-side-input') {
      setLegSideInput(event.target.value);
    }
    if (event.target.id === 'direction-cardinal-input') {
      setDirectionCardinalInput(event.target.value);
    }
    if (event.target.id === 'direction-side-input') {
      setDirectionSideInput(event.target.value);
    }
    if (event.target.id === 'spin-input') {
      setSpinInput(event.target.value);
    }
    if (event.target.id === 'head-input') {
      setHeadInput(event.target.value);
    }
    if (event.target.id === 'leftarm-position-input') {
      setLeftArmPositionInput(event.target.value);
    }
    if (event.target.id === 'leftarm-side-input') {
      setLeftArmSideInput(event.target.value);
    }
    if (event.target.id === 'leftarm-form-input') {
      setLeftArmFormInput(event.target.value);
    }
    if (event.target.id === 'rightarm-position-input') {
      setRightArmPositionInput(event.target.value);
    }
    if (event.target.id === 'rightarm-side-input') {
      setRightArmSideInput(event.target.value);
    }
    if (event.target.id === 'rightarm-form-input') {
      setRightArmFormInput(event.target.value);
    }

    if (event.target.id === 'demi') {
      setDemiChecked(!demiChecked);
      if (!demiChecked) {
        setDemiValue('D');
      } else {
        setDemiValue('');
      }
    }
    if (event.target.id === 'petit') {
      setPetitChecked(!petitChecked);
      if (!petitChecked) {
        setPetitValue('T');
      } else {
        setPetitValue('');
      }
    }
    if (event.target.id === 'plier') {
      setPlierChecked(!plierChecked);
      if (!plierChecked) {
        setPlierValue('P');
      } else {
        setPlierValue('');
      }
    }
    if (event.target.id === 'plat') {
      setPlatChecked(!platChecked);
      if (!platChecked) {
        setPlatValue('L');
      } else {
        setPlatValue('');
      }
    }
    if (event.target.id === 'aterre') {
      setAterreChecked(!aterreChecked);
      if (!aterreChecked) {
        setAterreValue('T');
      } else {
        setAterreValue('');
      }
    }
    if (event.target.id === 'quartier') {
      setQuartierChecked(!quartierChecked);
      if (!quartierChecked) {
        setQuartierValue('Q');
      } else {
        setQuartierValue('');
      }
    }
    if (event.target.id === 'grand') {
      setGrandChecked(!grandChecked);
      if (!grandChecked) {
        setGrandValue('G');
      } else {
        setGrandValue('');
      }
    }
    if (event.target.id === 'etire') {
      setEtireChecked(!etireChecked);
      if (!etireChecked) {
        setEtireValue('E');
      } else {
        setEtireValue('');
      }
    }
    if (event.target.id === 'releve') {
      setReleveChecked(!releveChecked);
      if (!releveChecked) {
        setReleveValue('V');
      } else {
        setReleveValue('');
      }
    }
    if (event.target.id === 'enlair') {
      setEnlairChecked(!enlairChecked);
      if (!enlairChecked) {
        setEnlairValue('A');
      } else {
        setEnlairValue('');
      }
    }
    if (event.target.id === 'changement') {
      setChangementChecked(!changementChecked);
      if (!changementChecked) {
        setChangementValue('C');
      } else {
        setChangementValue('');
      }
    }
    if (event.target.id === 'ferme') {
      setFermeChecked(!fermeChecked);
      if (!fermeChecked) {
        setFermeValue('F');
      } else {
        setFermeValue('');
      }
    }
    if (event.target.id === 'entournant') {
      setEntournantChecked(!entournantChecked);
      if (!entournantChecked) {
        setEntournantValue('N');
      } else {
        setEntournantValue('');
      }
    }
    if (event.target.id === 'battus') {
      setBattusChecked(!battusChecked);
      if (!battusChecked) {
        setBattusValue('B');
      } else {
        setBattusValue('');
      }
    }

  }

  useEffect(() => {

    setVariantValue(demiValue + petitValue + plierValue + platValue + aterreValue + quartierValue + grandValue + etireValue + releveValue + enlairValue + changementValue + fermeValue + entournantValue + battusValue);

  }, [demiValue, petitValue, plierValue, platValue, aterreValue, quartierValue, grandValue, etireValue, releveValue, enlairValue, changementValue, fermeValue, entournantValue, battusValue]);

  useEffect(() => {

    setFinalBlock(placeInput + hipInput + feetPositionInput + feetOrderInput + feetOpenCloseInput + variantValue + stepInput + numberInput + legFormInput + legCardinalInput + legSideInput + directionCardinalInput + directionSideInput + leftArmPositionInput + leftArmSideInput + leftArmFormInput + rightArmPositionInput + rightArmSideInput + rightArmFormInput + headInput);

  }, [placeInput, hipInput, feetPositionInput, feetOrderInput, feetOpenCloseInput, variantValue, stepInput, numberInput, legFormInput, legCardinalInput, legSideInput, directionCardinalInput, directionSideInput, leftArmPositionInput, leftArmSideInput, leftArmFormInput, rightArmPositionInput, rightArmSideInput, rightArmFormInput, headInput]);


  const handleAddBlock = (event) => {
    event.preventDefault();

    if (currentPhrase === '') {
      setCurrentPhrase(finalBlock);
    } else {
      setCurrentPhrase(currentPhrase + ' | ' + finalBlock);
    }

    setPlaceInput('');
    setHipInput('');
    setFeetPositionInput('');
    setFeetOrderInput('');
    setFeetOpenCloseInput('');
    setStepInput('');
    setNumberInput('');
    setLegFormInput('');
    setLegCardinalInput('');
    setLegSideInput('');
    setDirectionCardinalInput('');
    setDirectionSideInput('');
    setLeftArmPositionInput('');
    setLeftArmSideInput('');
    setLeftArmSideInput('');
    setRightArmPositionInput('');
    setRightArmSideInput('');
    setRightArmSideInput('');
    setHeadInput('');

    setDemiValue('');
    setPetitValue('');
    setPlierValue('');
    setPlatValue('');
    setAterreValue('');
    setQuartierValue('');
    setGrandValue('');
    setEtireValue('');
    setReleveValue('');
    setEnlairValue('');
    setChangementValue('');
    setFermeValue('');
    setEntournantValue('');
    setBattusValue('');

    setDemiChecked(false);
    setPetitChecked(false);
    setPlierChecked(false);
    setPlatChecked(false);
    setAterreChecked(false);
    setQuartierChecked(false);
    setGrandChecked(false);
    setEtireChecked(false);
    setReleveChecked(false);
    setEnlairChecked(false);
    setChangementChecked(false);
    setFermeChecked(false);
    setEntournantChecked(false);
    setBattusChecked(false);


  }


  return (

    <div className='main-container'>

      <form>

        <div className="init L0">
          <div className="h L1">
            <div className="L2 leftL2">
              <div className="h L3">
                <div className='titles heads'>Place</div>
                <div className="block-input">

                  <label htmlFor="place-input"></label>
                  <input type="text" id="place-input" list="place-options" value={placeInput} onChange={handleInputChange} />

                  <datalist id="place-options">
                    <option label="Ommited" value=''></option>
                    <option label="Center" value='0'></option>
                    <option label="Front-Left" value='1'></option>
                    <option label="Front" value='2'></option>
                    <option label="Front-Right" value='3'></option>
                    <option label="Right" value='4'></option>
                    <option label="Back-Right" value='5'></option>
                    <option label="Back" value='6'></option>
                    <option label="Back-Left" value='7'></option>
                    <option label="Left" value='8'></option>
                  </datalist>

                </div>
              </div>
              <div className="h L3 first-line">
                <div className='titles  heads'>Hip</div>
                <div className="block-input">
                  <label htmlFor="hip-input"></label>
                  <input type="text" id="hip-input" list="hip-options" value={hipInput} onChange={handleInputChange} />

                  <datalist id="hip-options">
                    <option label="Ommited" value=''></option>
                    <option label="Front Left" value='1'></option>
                    <option label="Front" value='2'></option>
                    <option label="Front Right" value='3'></option>
                    <option label="Right" value='4'></option>
                    <option label="Back Right" value='5'></option>
                    <option label="Back" value='6'></option>
                    <option label="Back Left" value='7'></option>
                    <option label="Left" value='8'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3 first-line">
                <div className='titles heads'>Feet</div>
                <div className="block-input">

                  <label htmlFor="feet-position-input"></label>
                  <input type="text" id="feet-position-input" list="feet-position-options" value={feetPositionInput} onChange={handleInputChange} />

                  <datalist id="feet-position-options">
                    <option label="Ommited" value=''></option>
                    <option label="First Position" value='1'></option>
                    <option label="Second Position" value='2'></option>
                    <option label="Third Position" value='3'></option>
                    <option label="Fourth Position" value='4'></option>
                    <option label="Fifth Position" value='5'></option>
                  </datalist>

                  <label htmlFor="feet-order-input"></label>
                  <input type="text" id="feet-order-input" list="feet-order-options" value={feetOrderInput} onChange={handleInputChange} />

                  <datalist id="feet-order-options">
                    <option label="Ommited" value=''></option>
                    <option label="Right Foot Front" value='+'></option>
                    <option label="Right Foot Back" value='-'></option>
                    <option label="Symmetric" value='='></option>
                  </datalist>

                  <label htmlFor="feet-openClose-input"></label>
                  <input type="text" id="feet-openClose-input" list="feet-openClose-options" value={feetOpenCloseInput} onChange={handleInputChange} />

                  <datalist id="feet-openClose-options">
                    <option label="Opened Position (Usual)" value=''></option>
                    <option label="Closed Position" value='¬'></option>
                  </datalist>

                </div>
              </div>
            </div>
            <div className="L2 leftL2">
              <div className="h L3">
                <div className='titles heads'>Step</div>
                <div className="block-input">
                  <label htmlFor="step-input"></label>
                  <input className="step" type="text" id="step-input" list="step-options" value={stepInput} onChange={handleInputChange} />

                  <datalist id="step-options">
                    <option label="Ommited" value=''></option>
                    <option label="Assemblé" value='as'></option>
                    <option label="Ballonné" value='bn'></option>
                    <option label="Balloté" value='bt'></option>
                    <option label="Battement" value='bm'></option>
                    <option label="Basque (Pas de)" value='bs'></option>
                    <option label="Bourré (Pas de)" value='br'></option>
                    <option label="Brisé" value='bi'></option>
                    <option label="Cabriole" value='cb'></option>
                    <option label="Coupé" value='cp'></option>
                    <option label="Changement/Entrechat" value='ch'></option>
                    <option label="Chassé" value='cs'></option>
                    <option label="Chat (Pas de)" value='ct'></option>
                    <option label="Cheval (Pas de)" value='cv'></option>
                    <option label="Ciseaux (Pas de)" value='cx'></option>
                    <option label="Cloche" value='cl'></option>
                    <option label="Contretemps" value='cn'></option>
                    <option label="Deboulé" value='db'></option>
                    <option label="Degagé" value='dg'></option>
                    <option label="Detourné" value='dt'></option>
                    <option label="Developpé" value='dv'></option>
                    <option label="Decalé" value='dl'></option>
                    <option label="Echappé" value='ep'></option>
                    <option label="Elevé" value='ev'></option>
                    <option label="Emboité" value='eb'></option>
                    <option label="Enveloppé" value='en'></option>
                    <option label="Fait" value='fi'></option>
                    <option label="Flic" value='fc'></option>
                    <option label="Flic-Flac" value='ff'></option>
                    <option label="Fondú (Battement)" value='fn'></option>
                    <option label="Fouetté" value='ft'></option>
                    <option label="Frappé (Battement)" value='fp'></option>
                    <option label="Gargoulliade" value='gg'></option>
                    <option label="Glissade" value='gl'></option>
                    <option label="Jeté" value='jt'></option>
                    <option label="Jeté Entrelacé" value='je'></option>
                    <option label="Pas" value='pa'></option>
                    <option label="Poisson (Pas de)" value='pp'></option>
                    <option label="Polonaise (Pas de)" value='po'></option>
                    <option label="Possé" value='ps'></option>
                    <option label="Marché (Pas de)" value='pm'></option>
                    <option label="Penché" value='pn'></option>
                    <option label="Piqué" value='pq'></option>
                    <option label="Pirouette" value='py'></option>
                    <option label="Plié" value='pl'></option>
                    <option label="Pointé" value='pe'></option>
                    <option label="Promenade" value='pr'></option>
                    <option label="Pied Flex" value='px'></option>
                    <option label="Relevé" value='rv'></option>
                    <option label="Relevé Lent" value='rl'></option>
                    <option label="Renversé" value='rn'></option>
                    <option label="Reverence" value='re'></option>
                    <option label="Ronde de Corpe" value='rc'></option>
                    <option label="Ronde de Jambe" value='rj'></option>
                    <option label="Ronde Jeté" value='rt'></option>
                    <option label="Ronde de Pied" value='rp'></option>
                    <option label="Royale" value='ry'></option>
                    <option label="Sauter (Soubresaut)" value='sr'></option>
                    <option label="Sissone" value='sn'></option>
                    <option label="Soutenue" value='st'></option>
                    <option label="Soplesse" value='sp'></option>
                    <option label="Temps de Cuisse" value='tc'></option>
                    <option label="Temps de Fleche" value='tf'></option>
                    <option label="Temps Levé" value='tv'></option>
                    <option label="Temps Lié" value='tl'></option>
                    <option label="Tendú (Battement)" value='tn'></option>
                    <option label="Tombé" value='tb'></option>
                    <option label="Tour de Jambe" value='tj'></option>
                    <option label="Vals (Pas de)" value='vs'></option>
                    <option label="Tour" value='tr'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3">
                <div className='titles heads'>Number</div>
                <div className="block-input titles">
                  <label htmlFor="number-input"></label>

                  <input type="text" id="number-input" list="number-options" value={numberInput} onChange={handleInputChange} />

                  <datalist id="number-options">
                    <option label="Single/Ommited" value=''></option>
                    <option label="Double" value='2'></option>
                    <option label="Triple" value='3'></option>
                    <option label="Quadruple" value='4'></option>
                    <option label="Quintuple" value='5'></option>
                    <option label="Sixtuple" value='6'></option>
                    <option label="Seventuple" value='7'></option>
                    <option label="Eightuple" value='8'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3">
                <div className='titles heads'>Leg</div>
                <div className="block-input">
                  <label htmlFor="leg-form-input"></label>
                  <input type="text" id="leg-form-input" list="leg-form-options" value={legFormInput} onChange={handleInputChange} />

                  <datalist id="leg-form-options">
                    <option label="Ommited" value=''></option>
                    <option label="Cou de Pied" value='#'></option>
                    <option label="Passé" value='$'></option>
                    <option label="Attitude" value='%'></option>
                    <option label="Etiré" value='/'></option>
                  </datalist>

                  <label htmlFor="leg-cardinal-input"></label>
                  <input type="text" id="leg-cardinal-input" list="leg-cardinal-options" value={legCardinalInput} onChange={handleInputChange} />

                  <datalist id="leg-cardinal-options">
                    <option label="Ommited" value=''></option>
                    <option label="Front" value='+'></option>
                    <option label="Back" value='-'></option>
                    <option label="Side" value='='></option>
                  </datalist>

                  <label htmlFor="leg-side-input"></label>
                  <input type="text" id="leg-side-input" list="leg-side-options" value={legSideInput} onChange={handleInputChange} />

                  <datalist id="leg-side-options">
                    <option label="Right Leg" value=''></option>
                    <option label="Left Leg" value='!'></option>
                  </datalist>
                </div>
              </div>
            </div>
            <div className="L2 leftL2">
              <div className="h L3">
                <div className='titles heads'>Direction</div>
                <div className="block-input">
                  <label htmlFor="direction-cardinal-input"></label>
                  <input type="text" id="direction-cardinal-input" list="direction-cardinal-options" value={directionCardinalInput} onChange={handleInputChange} />

                  <datalist id="direction-cardinal-options">
                    <option label="Ommited" value=''></option>
                    <option label="Front" value='+'></option>
                    <option label="Back" value='-'></option>
                    <option label="Side" value='='></option>
                  </datalist>

                  <label htmlFor="direction-side-input"></label>
                  <input type="text" id="direction-side-input" list="direction-side-options" value={directionSideInput} onChange={handleInputChange} />

                  <datalist id="direction-side-options">
                    <option label="Right Leg / Ommited" value=''></option>
                    <option label="Left Leg" value='!'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3 third-line">
                <div className='titles heads'>Spin</div>
                <div className="block-input">
                  <label htmlFor="spin-input"></label>
                  <input type="text" id="spin-input" list="spin-options" value={spinInput} onChange={handleInputChange} />

                  <datalist id="spin-options">
                    <option label="Ommited" value=''></option>
                    <option label="Clockwise" value='>'></option>
                    <option label="Counter-Clockwise" value='<'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3 third-line">
                <div className='titles heads'>Head</div>
                <div className="block-input">
                  <label htmlFor="head-input"></label>
                  <input type="text" id="head-input" list="head-options" value={headInput} onChange={handleInputChange} />

                  <datalist id="head-options">
                    <option label="Ommited" value=''></option>
                    <option label="En Dehors Left" value='1'></option>
                    <option label="Front" value='2'></option>
                    <option label="En Dehors Right" value='3'></option>
                    <option label="Profile Right" value='4'></option>
                    <option label="En Dedans Right" value='5'></option>
                    <option label="Down" value='6'></option>
                    <option label="En Dedans Left" value='7'></option>
                    <option label="Profile Left" value='8'></option>
                  </datalist>
                </div>
              </div>
            </div>
            <div className="L2 leftL2">
              <div className="h L3">
                <div className='titles heads'>Left Arm</div>
                <div className="block-input">
                  <label htmlFor="leftarm-form-input"></label>
                  <input type="text" id="leftarm-position-input" list="leftarm-position-options" value={leftArmPositionInput} onChange={handleInputChange} />

                  <datalist id="leftarm-position-options">
                    <option label="Ommited" value=''></option>
                    <option label="Bras Bas" value='0'></option>
                    <option label="First Position" value='1'></option>
                    <option label="Second Position" value='2'></option>
                    <option label="Fifth Position" value='3'></option>
                    <option label="Bar" value='4'></option>
                    <option label="Derriére" value='5'></option>
                    <option label="Waist" value='6'></option>
                    <option label="Chest" value='7'></option>
                    <option label="Shoulder" value='8'></option>
                    <option label="Face" value='9'></option>
                  </datalist>

                  <label htmlFor="leftarm-side-input"></label>
                  <input type="text" id="leftarm-side-input" list="leftarm-side-options" value={leftArmSideInput} onChange={handleInputChange} />

                  <datalist id="leftarm-side-options">
                    <option label="Ommited" value=''></option>
                    <option label="Right" value='?'></option>
                    <option label="Left" value='!'></option>
                  </datalist>

                  <label htmlFor="leftarm-form-input"></label>
                  <input type="text" id="leftarm-form-input" list="leftarm-form-options" value={leftArmFormInput} onChange={handleInputChange} />

                  <datalist id="leftarm-form-options">
                    <option label="Normal" value=''></option>
                    <option label="Allongé" value='°'></option>
                    <option label="w/Partenaire" value='"'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3">
                <div className='titles heads'>Right Arm</div>
                <div className="block-input">
                  <label htmlFor="rightarm-form-input"></label>
                  <input type="text" id="rightarm-position-input" list="rightarm-position-options" value={rightArmPositionInput} onChange={handleInputChange} />

                  <datalist id="rightarm-position-options">
                    <option label="Ommited" value=''></option>
                    <option label="Bras Bas" value='0'></option>
                    <option label="First Position" value='1'></option>
                    <option label="Second Position" value='2'></option>
                    <option label="Fifth Position" value='3'></option>
                    <option label="Bar" value='4'></option>
                    <option label="Derriére" value='5'></option>
                    <option label="Waist" value='6'></option>
                    <option label="Chest" value='7'></option>
                    <option label="Shoulder" value='8'></option>
                    <option label="Face" value='9'></option>
                  </datalist>

                  <label htmlFor="rightarm-side-input"></label>
                  <input type="text" id="rightarm-side-input" list="rightarm-side-options" value={rightArmSideInput} onChange={handleInputChange} />

                  <datalist id="rightarm-side-options">
                    <option label="Ommited" value=''></option>
                    <option label="Right" value='?'></option>
                    <option label="Left" value='!'></option>
                  </datalist>

                  <label htmlFor="rightarm-form-input"></label>
                  <input type="text" id="rightarm-form-input" list="rightarm-form-options" value={rightArmFormInput} onChange={handleInputChange} />

                  <datalist id="rightarm-form-options">
                    <option label="Normal" value=''></option>
                    <option label="Allongé" value='°'></option>
                    <option label="w/Partenaire" value='"'></option>
                  </datalist>
                </div>
              </div>
            </div>
          </div>
          <div className="h L1 variant-side">
            <div className="L2 variant-title heads">Variants</div>
            <div className="L2 varia">
              <div className="h">
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Demi" id="demi" value='D' checked={demiChecked} onChange={handleInputChange} /></div>
                  <div className="h">Demi</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Petit" id='petit' value='T' checked={petitChecked} onChange={handleInputChange} /></div>
                  <div className="h">Petit</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Plier" id='plier' value='P' checked={plierChecked} onChange={handleInputChange} /></div>
                  <div className="h">Plier</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Plat" id='plat' value='L' checked={platChecked} onChange={handleInputChange} /></div>
                  <div className="h">Plat</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="A Térre" id='aterre' value='R' checked={aterreChecked} onChange={handleInputChange} /></div>
                  <div className="h">A Térre</div>
                </div>
              </div >
              <div className="h">
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Quartier" id='quartier' value='Q' checked={quartierChecked} onChange={handleInputChange} /></div>
                  <div className="h">Quartier</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Grand" id='grand' value='G' checked={grandChecked} onChange={handleInputChange} /></div>
                  <div className="h">Grand</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Etiré" id='etire' value='E' checked={etireChecked} onChange={handleInputChange} /></div>
                  <div className="h">Etiré</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Relevé" id='releve' value='V' checked={releveChecked} onChange={handleInputChange} /></div>
                  <div className="h">Relevé</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="En L'Air" id='enlair' value='A' checked={enlairChecked} onChange={handleInputChange} /></div>
                  <div className="h">En L'Air</div>
                </div>
              </div>
              <div className="h">
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Changement" id='changement' value='C' checked={changementChecked} onChange={handleInputChange} /></div>
                  <div className="h">Changement</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Fermé" id='ferme' value='F' checked={fermeChecked} onChange={handleInputChange} /></div>
                  <div className="h">Fermé</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="En Tournant" id='entournant' value='N' checked={entournantChecked} onChange={handleInputChange} /></div>
                  <div className="h">En Tournant</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Battus" id='battus' value='B' checked={battusChecked} onChange={handleInputChange} /></div>
                  <div className="h">Battus</div>
                </div>
                <div className='button-box'>
                  <div className="h"><button onClick={handleAddBlock}>Add Block</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </form>

      <div>

        <div className="current-phrase">
          <div className='h'>Current Phrase</div>
          <div className='h'>{currentPhrase} </div>
          <button>Add to Step</button>
        </div>

        <div className="current-block">
          <div className='block-tag h'>Current Block:</div>
          <div className='block-itself h'>{finalBlock}</div>
        </div>



      </div>



    </div>





  )


}

export default BlockInput;