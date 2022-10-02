import React from "react"
import { Controller } from "react-hook-form"
import FileUploadField from "../../../../components/atoms/file-upload-field"
import BodyCard from "../../../../components/organisms/body-card"
import RadioGroup from "../../../../components/organisms/radio-group"
import DraggableTable from "../../../../components/templates/draggable-table"
import { useProductForm } from "../form/product-form-context"
import Preview from "./preview/preview"
import Checkbox from "../../../../components/atoms/checkbox"
import IconTooltip from "../../../../components/molecules/icon-tooltip"

const columns = [
  {
    Header: "Image",
    accessor: "image",
    Cell: ({ cell }) => {
      return (
        <div className="py-base large:w-[176px] xsmall:w-[80px]">
          <img
            className="h-[80px] w-[80px] object-cover rounded"
            src={cell.row.original.url}
          />
        </div>
      )
    },
  },
  {
    Header: "File Name",
    accessor: "name",
    Cell: ({ cell }) => {
      return (
        <div className="large:w-[700px] medium:w-[400px] small:w-auto">
          <p className="inter-small-regular">{cell.row.original?.name}</p>
          <span className="inter-small-regular text-grey-50">
            {typeof cell.row.original.size === "number"
              ? `${(cell.row.original.size / 1024).toFixed(2)} KB`
              : cell.row.original?.size}
          </span>
        </div>
      )
    },
  },
  {
    Header: <div className="text-center">Thumbnail</div>,
    accessor: "thumbnail",
    Cell: ({ cell }) => {
      return (
        <div className="flex justify-center">
          <RadioGroup.SimpleItem
            className="justify-center"
            value={cell.row.index}
          />
        </div>
      )
    },
  },
]

const Images = ({ product }) => {
  const {
    register,
    images,
    setImages,
    appendImage,
    removeImage,
    control,
    setPreviewUrl,
    is3dPreviewEnabled,
    set3dPreview

  } = useProductForm()

  React.useEffect(() => {

    if(product != null || undefined) set3dPreview(product.metadata?.previewUrl != null || undefined)
  }, [])




  const previewCheckBoxChanged = (e) => {
    set3dPreview(e.target.checked)
  }


  return (
    <BodyCard title="Images" subtitle="Add up to 10 images to your product">
      <div className="mt-base">
        <Controller
          name="thumbnail"
          control={control}
          render={({ value, onChange }) => {
            return (
              <RadioGroup.Root
                value={value}
                onValueChange={(value) => {
                  onChange(value)
                }}
              >
                <DraggableTable
                  onDelete={removeImage}
                  columns={columns}
                  entities={images}
                  setEntities={setImages}
                />
              </RadioGroup.Root>
            )
          }}
        />
      </div>
      <div className="mt-2xlarge">
        <FileUploadField
          onFileChosen={(files) => {
            const file = files[0]
            const url = URL.createObjectURL(file)
            appendImage({
              url,
              name: file.name,
              size: file.size,
              nativeFile: file,
            })
          }}
          placeholder="1200 x 1600 (3:4) recommended, up to 10MB each"
          filetypes={["png", "jpg", "jpeg"]}
          className="py-large"
        />

      </div>

      <div className="mt-2xlarge">
        <div className="flex item-center gap-x-1.5 mb-xlarge">
          <Checkbox name="preview" checked={is3dPreviewEnabled} onChange={previewCheckBoxChanged} label="Enable 3d Preview" />
          <IconTooltip
            content={
              "When unchecked 3d preview will not be applied to this product"
            }
          />
        </div>
      </div>

      {
        is3dPreviewEnabled &&
        <Preview product={product} />
      }

    </BodyCard>
  )
}

export default Images
