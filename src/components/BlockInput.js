import { useEffect, useState } from 'react';
import '../styles/BlockInput.css';

function BlockInput() {


  const [variantValue, setVariantValue] = useState('');

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

  // We define the structure of the class, parts of which will be rendered to the user.
  const [balletClass, setBalletClass] = useState({
    master: '',
    mounth: 1,
    day: 1,
    year: 2024,
    country: '',
    classBody: [
      {
        order: 1,
        stage: '',
        kind: '',
        stepBody: [
          {
            order: 1,
            phraseBody: [
              {
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              },
              {
                place: '',
                hip: '',
                feetPosition: '',
                feetOrder: '',
                feetOpenClose: '',
                variants: '',
                step: '',
                number: '',
                legForm: '',
                legCardinal: '',
                legSide: '',
                directionCardinal: '',
                directionSide: '',
                spin: '',
                leftArmPosition: '',
                leftArmSide: '',
                leftArmForm: '',
                rightArmPosition: '',
                rightArmSide: '',
                rightArmForm: '',
                head: ''
              }
            ]
          }
        ]
      }
    ]

  });

  // Here we are defining the navigation Dynamic Variables (the ones pointing to parts of the Ballet Class Document)
  const [navBlock, setNavBlock] = useState(0);
  const [navPhrase, setNavPhrase] = useState(0);
  const [navStep, setNavStep] = useState(0);


  // Here we define the actual dynamic values showed to the user
  const [currentBlock, setCurrentBlock] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [currentStep, setCurrentStep] = useState('');
  const [currentStage, setCurrentStage] = useState('');
  const [currentKind, setCurrentKind] = useState('');


  const handleInputChange = (event) => {

    if (event.target.id === 'place-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].place = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'hip-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].hip = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'feet-position-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetPosition = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'feet-order-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetOrder = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'feet-openClose-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetOpenClose = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'step-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].step = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'number-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].number = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'leg-form-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legForm = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'leg-cardinal-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legCardinal = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'leg-side-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legSide = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'direction-cardinal-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].directionCardinal = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'direction-side-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].directionSide = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'spin-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].spin = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'head-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].head = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'leftarm-position-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmPosition = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'leftarm-side-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmSide = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'leftarm-form-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmForm = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'rightarm-position-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmPosition = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'rightarm-side-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmSide = event.target.value;
      setBalletClass(updateBalletClass);
    }
    if (event.target.id === 'rightarm-form-input') {
      const updateBalletClass = { ...balletClass };
      updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmForm = event.target.value;
      setBalletClass(updateBalletClass);
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

    const updateBalletClass = { ...balletClass };
    updateBalletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants = variantValue;
    setBalletClass(updateBalletClass);

  }, [balletClass, navBlock, navPhrase, navStep, variantValue, demiValue, petitValue, plierValue, platValue, aterreValue, quartierValue, grandValue, etireValue, releveValue, enlairValue, changementValue, fermeValue, entournantValue, battusValue]);

  useEffect(() => {

    setCurrentBlock(balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].place + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].hip + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetPosition + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetOrder + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetOpenClose + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].variants + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].step + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].number + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legForm + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legCardinal + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legSide + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].directionCardinal + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].directionSide + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].spin + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmPosition + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmSide + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmForm + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmPosition + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmSide + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmForm + balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].head);

  }, [balletClass, variantValue, navBlock, navPhrase, navStep, demiValue, petitValue, plierValue, platValue, aterreValue, quartierValue, grandValue, etireValue, releveValue, enlairValue, changementValue, fermeValue, entournantValue, battusValue]);

  //Navigation Buttons

  //Back Block
  const handleBackBlock = () => {
    setNavBlock(prevBlock => {
      const nextBlockBody = balletClass.classBody[navStep]?.stepBody[navPhrase]?.phraseBody[navBlock - 1];
      if (nextBlockBody !== undefined) {
        return prevBlock - 1;
      }
      return prevBlock;
    });
  };

  //Forward Block
  const handleForwardBlock = () => {
    setNavBlock(prevBlock => {
      const nextBlockBody = balletClass.classBody[navStep]?.stepBody[navPhrase]?.phraseBody[navBlock + 1];
      if (nextBlockBody !== undefined) {
        return prevBlock + 1;
      }
      return prevBlock;
    });
  };

  //Back Phrase
  const handleBackPhrase = () => {
    setNavPhrase(prevPhrase => {
      const nextPhraseBody = balletClass.classBody[navStep]?.stepBody[navPhrase - 1];
      if (nextPhraseBody !== undefined) {
        return prevPhrase - 1;
      }
      return prevPhrase;
    });
  };

  //Forward Phrase 
  const handleForwardPhrase = () => {
    setNavPhrase(prevPhrase => {
      const nextPhraseBody = balletClass.classBody[navStep]?.stepBody[navPhrase + 1];
      if (nextPhraseBody !== undefined) {
        return prevPhrase + 1;
      }
      return prevPhrase;
    });
  };

  //Back Step
  const handleBackStep = () => {
    setNavStep(prevStep => {
      const nextStepBody = balletClass.classBody[navStep - 1];
      if (nextStepBody !== undefined) {
        return prevStep - 1;
      }
      return prevStep;
    });
  };

  //Forward Step 
  const handleForwardStep = () => {
    setNavStep(prevStep => {
      const nextStepBody = balletClass.classBody[navStep + 1];
      if (nextStepBody !== undefined) {
        return prevStep + 1;
      }
      return prevStep;
    });
  };













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
                  <input type="text" id="place-input" list="place-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].place} onChange={handleInputChange} />

                  <datalist id="place-options">
                    <option label="Ommited" value=''></option>
                    <option label="Center" value='0;'></option>
                    <option label="Front-Left" value='1;'></option>
                    <option label="Front" value='2;'></option>
                    <option label="Front-Right" value='3;'></option>
                    <option label="Right" value='4;'></option>
                    <option label="Back-Right" value='5;'></option>
                    <option label="Back" value='6;'></option>
                    <option label="Back-Left" value='7;'></option>
                    <option label="Left" value='8;'></option>
                  </datalist>

                </div>
              </div>
              <div className="h L3 first-line">
                <div className='titles  heads'>Hip</div>
                <div className="block-input">
                  <label htmlFor="hip-input"></label>
                  <input type="text" id="hip-input" list="hip-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].hip} onChange={handleInputChange} />

                  <datalist id="hip-options">
                    <option label="Ommited" value=''></option>
                    <option label="Front Left" value='1:'></option>
                    <option label="Front" value='2:'></option>
                    <option label="Front Right" value='3:'></option>
                    <option label="Right" value='4:'></option>
                    <option label="Back Right" value='5:'></option>
                    <option label="Back" value='6:'></option>
                    <option label="Back Left" value='7:'></option>
                    <option label="Left" value='8:'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3 first-line">
                <div className='titles heads'>Feet</div>
                <div className="block-input">

                  <label htmlFor="feet-position-input"></label>
                  <input type="text" id="feet-position-input" list="feet-position-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetPosition} onChange={handleInputChange} />

                  <datalist id="feet-position-options">
                    <option label="Ommited" value=''></option>
                    <option label="First Position" value='1'></option>
                    <option label="Second Position" value='2'></option>
                    <option label="Third Position" value='3'></option>
                    <option label="Fourth Position" value='4'></option>
                    <option label="Fifth Position" value='5'></option>
                  </datalist>

                  <label htmlFor="feet-order-input"></label>
                  <input type="text" id="feet-order-input" list="feet-order-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetOrder} onChange={handleInputChange} />

                  <datalist id="feet-order-options">
                    <option label="Ommited" value=''></option>
                    <option label="Right Foot Front" value='+'></option>
                    <option label="Right Foot Back" value='-'></option>
                    <option label="Symmetric" value='='></option>
                  </datalist>

                  <label htmlFor="feet-openClose-input"></label>
                  <input type="text" id="feet-openClose-input" list="feet-openClose-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].feetOpenClose} onChange={handleInputChange} />

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
                  <input className="step" type="text" id="step-input" list="step-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].step} onChange={handleInputChange} />

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

                  <input type="text" id="number-input" list="number-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].number} onChange={handleInputChange} />

                  <datalist id="number-options">
                    <option label="Single/Ommited" value=''></option>
                    <option label="Double" value='2.'></option>
                    <option label="Triple" value='3.'></option>
                    <option label="Quadruple" value='4.'></option>
                    <option label="Quintuple" value='5.'></option>
                    <option label="Sixtuple" value='6.'></option>
                    <option label="Seventuple" value='7.'></option>
                    <option label="Eightuple" value='8.'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3">
                <div className='titles heads'>Leg</div>
                <div className="block-input">
                  <label htmlFor="leg-form-input"></label>
                  <input type="text" id="leg-form-input" list="leg-form-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legForm} onChange={handleInputChange} />

                  <datalist id="leg-form-options">
                    <option label="Ommited" value=''></option>
                    <option label="Cou de Pied" value='#'></option>
                    <option label="Passé" value='$'></option>
                    <option label="Attitude" value='%'></option>
                    <option label="Etiré" value='/'></option>
                  </datalist>

                  <label htmlFor="leg-cardinal-input"></label>
                  <input type="text" id="leg-cardinal-input" list="leg-cardinal-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legCardinal} onChange={handleInputChange} />

                  <datalist id="leg-cardinal-options">
                    <option label="Ommited" value=''></option>
                    <option label="Front" value='+'></option>
                    <option label="Back" value='-'></option>
                    <option label="Side" value='='></option>
                  </datalist>

                  <label htmlFor="leg-side-input"></label>
                  <input type="text" id="leg-side-input" list="leg-side-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].legSide} onChange={handleInputChange} />

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
                  <input type="text" id="direction-cardinal-input" list="direction-cardinal-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].directionCardinal} onChange={handleInputChange} />

                  <datalist id="direction-cardinal-options">
                    <option label="Ommited" value=''></option>
                    <option label="Front" value='+'></option>
                    <option label="Back" value='-'></option>
                    <option label="Side" value='='></option>
                  </datalist>

                  <label htmlFor="direction-side-input"></label>
                  <input type="text" id="direction-side-input" list="direction-side-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].directionSide} onChange={handleInputChange} />

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
                  <input type="text" id="spin-input" list="spin-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].spin} onChange={handleInputChange} />

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
                  <input type="text" id="head-input" list="head-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].head} onChange={handleInputChange} />

                  <datalist id="head-options">
                    <option label="Ommited" value=''></option>
                    <option label="En Dehors Left" value='1*'></option>
                    <option label="Front" value='2*'></option>
                    <option label="En Dehors Right" value='3*'></option>
                    <option label="Profile Right" value='4*'></option>
                    <option label="En Dedans Right" value='5*'></option>
                    <option label="Down" value='6*'></option>
                    <option label="En Dedans Left" value='7*'></option>
                    <option label="Profile Left" value='8*'></option>
                  </datalist>
                </div>
              </div>
            </div>
            <div className="L2 leftL2">
              <div className="h L3">
                <div className='titles heads'>Left Arm</div>
                <div className="block-input">
                  <label htmlFor="leftarm-form-input"></label>
                  <input type="text" id="leftarm-position-input" list="leftarm-position-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmPosition} onChange={handleInputChange} />

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
                  <input type="text" id="leftarm-side-input" list="leftarm-side-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmSide} onChange={handleInputChange} />

                  <datalist id="leftarm-side-options">
                    <option label="Ommited" value=''></option>
                    <option label="Right" value='?'></option>
                    <option label="Left" value='!'></option>
                  </datalist>

                  <label htmlFor="leftarm-form-input"></label>
                  <input type="text" id="leftarm-form-input" list="leftarm-form-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].leftArmForm} onChange={handleInputChange} />

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
                  <input type="text" id="rightarm-position-input" list="rightarm-position-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmPosition} onChange={handleInputChange} />

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
                  <input type="text" id="rightarm-side-input" list="rightarm-side-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmSide} onChange={handleInputChange} />

                  <datalist id="rightarm-side-options">
                    <option label="Ommited" value=''></option>
                    <option label="Right" value='?'></option>
                    <option label="Left" value='!'></option>
                  </datalist>

                  <label htmlFor="rightarm-form-input"></label>
                  <input type="text" id="rightarm-form-input" list="rightarm-form-options" value={balletClass.classBody[navStep].stepBody[navPhrase].phraseBody[navBlock].rightArmForm} onChange={handleInputChange} />

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
                  <div className="h"></div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </form>

      <div>

        <div className='phrase-container'>
          <div className='phrase-tag'><button className='back-phrase' onClick={handleBackPhrase}>&#10094;</button> Phrase <input className='nav-input' type='number' value={navPhrase} /> <button className='forward-phrase' onClick={handleForwardPhrase}>&#10095;</button></div>
          <div className="current-phrase">
            {currentPhrase}
          </div>
        </div>

        <div className='block-container'>
          <div className='block-tag'><button className='back-block' onClick={handleBackBlock}>&#10094;</button> Block <input className='nav-input' type='number' value={navBlock + 1} /> <button className='forward-block' onClick={handleForwardBlock}>&#10095;</button></div>
          <div className="current-block">
            {currentBlock}
          </div>
        </div>

        <div>
          <div className='step-tag'><button className='back-step' onClick={handleBackStep}>&#10094;</button> Step <input className='nav-input' type='number' value={navStep} />&nbsp;

            <input className='stage-input' type="text" id="stage-input" list="stage-options" placeholder='Stage' value={currentStage} />
            <datalist id="stage-options">
              <option label="Ommited" value=''></option>
              <option label="Warming" value='Warming'></option>
              <option label="Plié" value='Plié'></option>
              <option label="Battement Tendú" value='Battement Tendú'></option>
              <option label="Battement Jeté" value='Battement Jeté'></option>
              <option label="Ronde de Jambe" value='Ronde de Jambe'></option>
              <option label="Battement Fondú" value='Battement Fondú'></option>
              <option label="Battement Frappé" value='Battement Frappé'></option>
              <option label="Adagio" value='Adagio'></option>
              <option label="Grand Battement" value='Grand Battement'></option>
              <option label="Waltz" value='Waltz'></option>
              <option label="Petit Allegro" value='Petit Allegro'></option>
              <option label="Allegro" value='Allegro'></option>
              <option label="Batterie" value='Batterie'></option>
              <option label="Sissone" value='Sissone'></option>
              <option label="Grand Waltz" value='Grand Waltz'></option>
              <option label="Grand Allegro" value='Grand Allegro'></option>
              <option label="Coda" value='Coda'></option>
            </datalist>
            &nbsp;
            <input className='kind-input' type="text" id="kind-input" list="kind-options" placeholder='Kind' value={currentKind} />
            <datalist id="kind-options">
              <option label="Ommited" value=''></option>
              <option label="Bar" value='Bar'></option>
              <option label="Center" value='Center'></option>
            </datalist>
            &nbsp;
            <button className='forward-step' onClick={handleForwardStep}>&#10095;</button></div>
          <div className='current-step'>
            {currentStep}
          </div>
        </div>

        <button className='new-button'>New Class</button>
        <button className='open-button'>Open Class</button>
        <button className='save-button'>Save Class</button>
        <button className='new-phrase-button'>Add Phrase</button>
        <button className='new-step-button'>Add Step</button>

        <div>
          <div className='class-tag'> Master <input className='log log-master' type='text' />&nbsp;&nbsp;&nbsp; Mounth <input className='log log-mounth' type='number' />&nbsp;&nbsp;&nbsp; Day <input className='log log-day' type="number" />&nbsp;&nbsp;&nbsp; Year <input className='log log-year' type='number' />&nbsp;&nbsp;&nbsp; Country <input className='log log-country' type='text' /></div>
          <div className='current-class'></div>
        </div>


      </div>



    </div>



  )


}

export default BlockInput;