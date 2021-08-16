import React, {
  FC,
  MutableRefObject,
  createContext,
  useState,
  useEffect,
} from 'react';

export interface HandlerLayerProps {
  label: string;
  color: string;
  colorBlock: string;
  handler: Function;
  active: boolean;
}

export interface TooltipOption {
  handler: Function | HandlerLayerProps[];
  label: string;
  color?: string;
  icon: string;
  active?: boolean;
}

export interface Direction {
  X: 'left' | 'right';
  Y: 'top' | 'bottom';
}

export interface Position {
  X: number;
  Y: number;
}

interface StateProps {
  tooltipElement: MutableRefObject<HTMLDivElement> | null;
  visible?: boolean;
  options: TooltipOption[];
  direction: Direction;
  position: Position;
}

export interface TooltipProps extends StateProps {
  showTooltip: (state: StateProps) => void;
  closeTooltip: () => void;
}

const initialState: StateProps = {
  tooltipElement: null,
  visible: false,
  options: [],
  direction: {
    X: 'left',
    Y: 'top',
  },
  position: {
    X: 0,
    Y: 0,
  },
};

export const TooltipContext = createContext<TooltipProps>({
  ...initialState,
  closeTooltip: () => null,
  showTooltip: () => null,
});

const TooltipProvider: FC = ({ children }) => {
  const [state, setState] = useState<StateProps>(initialState);

  const showTooltip = (newState: StateProps) => {
    setState({
      ...state,
      ...newState,
      visible: true,
    });
  };

  const closeTooltip = () => {
    setState({
      ...state,
      ...initialState,
    });
  };

  useEffect(() => {
    const listener = () => {
      closeTooltip();
    };

    window.addEventListener('scroll', listener, true);
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('scroll', listener);
      window.removeEventListener('resize', listener);
    };
  }, []);

  return (
    <TooltipContext.Provider value={{ ...state, closeTooltip, showTooltip }}>
      {children}
    </TooltipContext.Provider>
  );
};

export default TooltipProvider;
