from django.db import models


class OptionGroup(models.Model):
    title = models.CharField(max_length=255, db_index=True)

    def __str__(self):
        return self.title 
    
    class Meta: 
        verbose_name = "Option Group"
        verbose_name_plural = "Option Groups"



class OptionGroupValue(models.Model):
    title = models.CharField(max_length=255, db_index=True)
    group = models.ForeignKey(OptionGroup, on_delete=models.CASCADE)


    def __str__(self):
        return self.title 
    
    class Meta: 
        verbose_name = "Option Group Value"
        verbose_name_plural = "Option Group Values"


class ProdcutClass(models.Model):
    title = models.CharField(max_length=255, db_index=True)
    description = models.CharField(max_length=2048, null=True, blank=True)
    slug = models.SlugField(unique=True, allow_unicode=True)

    # configurable options for 
    track_stock = models.BooleanField(default=True)
    require_shipping = models.BooleanField(default=True)

    options = models.ManyToManyField('Option')
  
    def __str__(self):
        return self.title 
    
    class Meta: 
        verbose_name = "Product Class"
        verbose_name_plural = "Product Classes"

class ProductAttribute(models.Model):

    class AttributeTypeChoice(models.TextChoices):
        text='text' 
        integer = 'integer'
        float = 'float'
        option = 'option'
        multi_option = 'multi_option'


    # may use attribute directly from product class, so  null can be 
    product_class = models.ForeignKey(ProdcutClass, on_delete=models.CASCADE, null=True, related_name='attributes')

    title = models.models.CharField(max_length=64)
    type = models.CharField(max_length=16, choices=AttributeTypeChoice.choices, default=AttributeTypeChoice.text)
    option_group = models.ForeignKey(OptionGroup, on_delete=models.PROTECT, null=True, blank=True)

    required = models.models.BooleanField(default=False)

    def __str__(self):
        return self.title 
    
    class Meta: 
        verbose_name = "Product Attributes"
        verbose_name_plural = "Product Attributes"






class Option(models.Model):

    class OptionTypeChoice(models.TextChoices):
        text='text' 
        integer = 'integer'
        float = 'float'
        option = 'option'
        multi_option = 'multi_option'


    # may use attribute directly from Option class, so  null can be 

    title = models.models.CharField(max_length=64)
    type = models.CharField(max_length=16, choices=OptionTypeChoice.choices, default=OptionTypeChoice.text)
    option_group = models.ForeignKey(OptionGroup, on_delete=models.PROTECT, null=True, blank=True)

    required = models.models.BooleanField(default=False)

    def __str__(self):
        return self.title 
    
    class Meta: 
        verbose_name = "Option "
        verbose_name_plural = "Option"


class Product(models.Model):

    class ProductTypeChoice(models.TextChoices):
        physical = 'standalone'
        digital = 'parent'
        service = 'child'


    structure = models.CharField(max_length=16,choices=ProductTypeChoice, default=ProductTypeChoice.standalone)
    parent = models.ForeignKey("self", related_name="children",on_delete=models.CASCADE, null=True, blank=True)
    ## ایتم فرزند لزوما نیازی به تیتر نداره چون ممکنه که والد داشته باشه و یک variant باشه
    title = models.CharField