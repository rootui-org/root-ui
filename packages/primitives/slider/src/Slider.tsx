'use client'

// ============================================
// Imports
// ============================================
import { tv, type VariantProps } from 'tailwind-variants';
import {
  composeRenderProps,
  Slider as ReactAriaSlider,
  SliderThumb as ReactAriaSliderThumb,
  SliderTrack as ReactAriaSliderTrack,
  type SliderThumbProps as ReactAriaSliderThumbProps,
  type SliderProps as ReactAriaSliderProps,
  type SliderTrackRenderProps,
} from 'react-aria-components';
import { useState } from 'react';
import NumberFlow, { type NumberFlowProps } from '@number-flow/react'

// ============================================
// Types
// ============================================
interface SliderProps extends VariantProps<typeof sliderTrack>, ReactAriaSliderProps {
  thumbContent?: React.ReactNode;
  thumbProps?: SliderThumbProps;
  trackFillProps?: SliderTrackFillProps;
  showTooltip?: boolean;
  tooltipProps?: TooltipProps;
}

interface TooltipProps extends React.ComponentProps<'div'> {
  numberFlowProps?: Partial<NumberFlowProps>;
}

interface SliderThumbProps extends Omit<ReactAriaSliderThumbProps, 'children'>, VariantProps<typeof sliderThumb> {
  children?: React.ReactNode;
  showTooltip?: boolean;
  renderProps: SliderTrackRenderProps;
  tooltipProps?: TooltipProps;
}

interface SliderTrackFillProps extends React.ComponentProps<'div'>, VariantProps<typeof sliderTrackFill> {
  renderProps: SliderTrackRenderProps;
}

// ============================================
// Styles
// ============================================
const sliderTrack = tv({
  base: 'slider-track-base',
  variants: {
    isDisabled: {
      true: 'slider-track-disabled'
    },
    orientation: {
      horizontal: 'slider-track-horizontal',
      vertical: 'slider-track-vertical',
    },
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
})

const sliderTrackFill = tv({
  base: 'slider-track-fill-base',
  variants: {
    orientation: {
      horizontal: 'slider-track-fill-horizontal',
      vertical: 'slider-track-fill-vertical',
    },
    isDisabled: {
      true: 'slider-track-fill-disabled'
    },
  }
})

const sliderThumb = tv({
  base: 'slider-thumb-base',
  variants: {
    orientation: {
      horizontal: 'slider-thumb-horizontal',
      vertical: 'slider-thumb-vertical',
    },
    isDragging: {
      true: 'slider-thumb-dragging'
    },
    isDisabled: {
      true: 'slider-thumb-disabled'
    }
  }
})

const sliderThumbTooltip = tv({
  base: 'slider-thumb-tooltip-base',
  variants: {
    isDragging: {
      true: 'slider-thumb-tooltip-dragging',
    },
    isHovered: {
      true: 'slider-thumb-tooltip-hovered'
    },
    isDisabled: {
      true: 'slide-thumb-tooltip-disabled'
    },
    isExiting: {
      true: 'slider-thumb-tooltip-exiting'
    }
  },
})

// ============================================
// Sub-Components
// ============================================
function SliderThumb({
  className,
  renderProps,
  tooltipProps,
  showTooltip,
  children
}: SliderThumbProps) {
  const [hoveredThumb, setHoveredThumb] = useState<number | null>(null)

  return (
    renderProps.state.values.map((_, i) => (
      <ReactAriaSliderThumb
        key={i}
        index={i}
        aria-label={`thumb ${i + 1}`}
        className={composeRenderProps(className, (className, renderProps) => sliderThumb({ ...renderProps, className, orientation: renderProps.state.orientation }))}
        onMouseEnter={e => setHoveredThumb(i)}
        onMouseLeave={e => setHoveredThumb(null)}
      >
        {children && (
          <span className='w-full h-full flex items-center justify-center'>{children}</span>
        )}

        {/* Tooltip to display value of the thumb */}
        {showTooltip && (
          <div
            {...tooltipProps}
            className={sliderThumbTooltip({
              isDragging: renderProps.state.isThumbDragging(i),
              isHovered: hoveredThumb === i,
              isDisabled: renderProps.state.isDisabled,
              isExiting: !renderProps.state.isThumbDragging(i) && hoveredThumb !== i,
              className: tooltipProps?.className
            })}
          >
            <NumberFlow
              willChange
              isolate
              {...tooltipProps?.numberFlowProps}
              value={tooltipProps?.numberFlowProps?.value || renderProps.state.getThumbValue(i)}
            />
          </div>
        )}
      </ReactAriaSliderThumb>
    ))
  )
}

function SliderTrackFill({
  className,
  renderProps: { state, ...renderProps },
  ...props
}: SliderTrackFillProps) {
  if (state.values.length === 1) return (
    <div
      {...props}
      className={sliderTrackFill({ ...renderProps, className })}
      style={{ '--size': state.getThumbPercent(0) * 100 + '%' } as any}
    />
  )
  else return (
    <div
      {...props}
      className={sliderTrackFill({ ...renderProps, className })}
      style={{ '--start': state.getThumbPercent(0) * 100 + '%', '--size': (state.getThumbPercent(1) - state.getThumbPercent(0)) * 100 + '%' } as any}
    />
  )
}

// ============================================
// Main Component
// ============================================
function Slider({
  className,
  thumbContent,
  thumbProps,
  trackFillProps,
  tooltipProps,
  showTooltip = true,
  children,
  ...props
}: SliderProps) {
  return (
    <ReactAriaSlider
      {...props}
      className='w-full'
    >
      <ReactAriaSliderTrack
        className={composeRenderProps(className, (className, renderProps) => sliderTrack({ ...renderProps, className, }))}
      >
        {(renderProps) => (
          <>
            {/* Slider Track Fill - this is the indicator of the selected range */}
            <SliderTrackFill
              {...trackFillProps}
              renderProps={renderProps}
            />

            {/* Slider Thumbs */}
            <SliderThumb
              {...thumbProps}
              showTooltip={showTooltip}
              tooltipProps={tooltipProps}
              renderProps={renderProps}
            >
              {thumbContent}
            </SliderThumb>
          </>
        )}
      </ReactAriaSliderTrack>
    </ReactAriaSlider>
  )
}

// ============================================
// Exports
// ============================================
export {
  Slider,
  type SliderProps,
}